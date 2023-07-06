import { twind, cssom, observe, install } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../../twind.config.js";


// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 
`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --contentsBackground: var(--color-emerald-500);
            height: 100%;
        }

        :host li:hover #menuitem {
            color: var(--contentsBackground);
        }

        #menuitem { }

        #contents #triangle,
        #contents { 
            background: var(--contentsBackground);
            width: calc(100% - 2rem);
        }

    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`

    <li class="h-full group">
        <div id="menuitem" class="
            h-full 
            static
            text-white              md:text-black
            font-thin                   md:text-base
            ">

            <slot name="menu"></slot>
        </div>

        <!-- Container of contents  -->
        <div id="contents" class="absolute
            top-auto                    md:top-16 
            bottom-16                   md:bottom-auto
            left-4 
            rounded-lg 
            p-4 
            shadow-lg 
            transition 
            translate-y-0 
            opacity-0 
            invisible 
            transform
            duration-300
            ease-in-out
            overflow-hidden
            max-w-[100rem]
            
            group-hover:-translate-y-5  md:group-hover:translate-y-5 
            group-hover:opacity-100     md:group-hover:opacity-100 
            group-hover:visible         md:group-hover:visible 
            group-hover:transform       md:group-hover:transform">

            <!-- Main Content in the sub-menu -->
            <div class="z-50 relative">
                <slot name="content"></slot>
            </div>

        </div>
    </li>
`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class NavItem extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        // TWIND Setup
        const sheet = cssom(new CSSStyleSheet());
        const tw = twind(config, sheet);
        const theshadowRoot = this.shadowRoot;
        theshadowRoot.adoptedStyleSheets = [sheet.target];
        observe(tw, theshadowRoot);

        // define element
        const element = this.shadowRoot.querySelector("li");

        // Set classes on navbar
        element.classList.add(...this.classAttribute);
    }



    // ╭───────────────────────────────────────────────────────╮
    // │                   GETTERS / SETTERS                   │
    // ╰───────────────────────────────────────────────────────╯
    get classAttribute() {
        return this.classList;
    }

}

customElements.define("ldnpk-navitem", NavItem);