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
            --cssBackground:        var(--color-stone-50);
            --cssBackgroundMobile:  var(--color-stone-800);
        }

        nav {
            width: calc(100% - 0.5rem)
        }
        
        #navbar {
            background: var(--cssBackgroundMobile);
        }

        @media (min-width: 768px) { 
            nav {
                width: 100%
            }
            #navbar {
                background: var(--cssBackground);
            }
        }

    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`

    <nav class="
        fixed           md:static
        bottom-0        md:top-0
        left-1          
        right-1         
        z-50
        ">
        
        <ul id="navbar" class="
            flex 
            w-full 
            rounded-t-lg        md:rounded-none
            justify-center      md:justify-start">
            <slot></slot>
        </ul>
    </nav>

`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class NavBar extends HTMLElement {

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
        const element = this.shadowRoot.querySelector("#navbar");

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

customElements.define("ldnpk-navbar", NavBar);