export const Store = /* html */`

    <style>

        /* Mobile default - 4 rows 
            - Top Button
            - Categories
            - Slideshow of Products
            - Gift Cards
        */
        #menuitem-store-grid { 
            grid-template-rows: repeat(4, minmax(0, auto)); 
        }

        /* Desktop - Convert to 3 rows 
            - Top Button
            - Headings
            - Content
        */
        @media (min-width: 768px) { 
            #menuitem-store-grid { 
                grid-template-rows: minmax(0, 4rem) minmax(0, 1rem) minmax(0, auto); 
            }
        }

        /* Override the button glyph colour */
        #menuitem-store-grid ldnpk-button svg{
            fill: var(--color-yellow-500)
        }

    </style>



<!--╭──────────────────────────────────────────────────────╮
    │                  Main grid wrapper                   │░
    │              Contains all the contents               │░
    │              Mobile Default  - 2 Columns             │░
    │              Desktop         - 7 Columns             │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
    
    <div id="menuitem-store-grid" class="
        grid
        grid-cols-2         md:grid-cols-7
        grid-flow-col
        gap-2               md:gap-4">



<!--╭──────────────────────────────────────────────────────╮
    │                      Top Button                      │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <ldnpk-button shadow href="https://londonparkour.com" target="" class="
            col-span-2 md:col-span-6
            ">
            <!-- Glyph Prefix -->
            <svg slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
                <use xlink:href="#glyph-classes"></use>
            </svg>
            STORE
        </ldnpk-button>

        <div class="
            h-4
            text-white 
            hidden md:block">CATEGORIES</div>
        



<!--╭──────────────────────────────────────────────────────╮
    │                      Categories                      │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <div class="
            col-span-2      md:col-span-1 
            flex 
            flex-row        md:flex-col 
            h-full
            gap-2           md:gap-4">


            <ldnpk-menustorecard 
                title="T-Shirts" 
                subtitle="Unisex tees built for movement"
                textposition="bottom"
                class="
                h-full
                w-1/2 md:w-full"
                >


                <img class="lazyload"
                    src="../../../stories/images/INSIGNIA-GREY-Front-1.jpg" 
                    alt="T-shirt category image of man wearing londonparkour tee" 
                    width="1280" 
                    height="1280">
                

            </ldnpk-menustorecard>


            <ldnpk-menustorecard 
                title="Sweatshirts" 
                subtitle="Hard-wearing training gear"
                textposition="bottom"
                class="
                h-full
                w-1/2 md:w-full"
                >


                <img class="
                    object-scale-down 
                    object-center
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Sweatshirt-INSIGNIA-BLACK-Front2.jpg" 
                    alt="Sweatshirt category image of woman wearing londonparkour sweatshirt" 
                    width="1280" 
                    height="1280">
                

            </ldnpk-menustorecard>
        </div>

        <div class="text-white 
            h-4
            hidden md:block
            col-span-5">COLLECTIONS</div>


    <!--╭───────────────────────────────────────────────────────╮
        │                     CARD WRAPPER                      │
        ╰───────────────────────────────────────────────────────╯ -->
        <div class="
            col-span-2          md:col-span-5
            overflow-y-scroll
            ">

            <div class="
                w-[600px]           md:w-auto
                h-full
                
                grid
                grid-cols-5         
                grid-flow-col
                gap-2               md:gap-4">


            <!--╭───────────────────────────────────────────────────────╮
                │                      CITY HAVOC                       │
                ╰───────────────────────────────────────────────────────╯ -->
                <ldnpk-menustorecard 
                    title="City Havoc" 
                    textposition="top"
                    class="h-full"
                    >

                    <img class=""
                            src="../../../stories/images/EVADE-ALT-BLACK-Front.jpg" 
                            alt="Sweatshirt category image of woman wearing londonparkour sweatshirt" 
                            width="1280" 
                            height="1280">

                </ldnpk-menustorecard>
                
            <!--╭───────────────────────────────────────────────────────╮
                │                         SIGIL                         │
                ╰───────────────────────────────────────────────────────╯ -->
                <ldnpk-menustorecard 
                    title="Sigil" 
                    textposition="top"
                    class="h-full"
                    >

                    <img class=""
                        src="../../../stories/images/SCOUT-YELLOW-Front.jpg" 
                        alt="Sweatshirt category image of woman wearing londonparkour sweatshirt" 
                        width="1280" 
                        height="1280">


                </ldnpk-menustorecard>


            <!--╭───────────────────────────────────────────────────────╮
                │                       PRO-MISSION                     │
                ╰───────────────────────────────────────────────────────╯ -->
                <ldnpk-menustorecard 
                    title="Pro-Mission" 
                    textposition="top"
                    class="h-full"
                    >

                    <img class="
                        "
                        src="../../../stories/images/EMBLEM-BLACK-Front.jpg" 
                        alt="Sweatshirt category image of woman wearing londonparkour sweatshirt" 
                        width="1280" 
                        height="1280">

                </ldnpk-menustorecard>

            <!--╭───────────────────────────────────────────────────────╮
                │                       FOUNDATION                      │
                ╰───────────────────────────────────────────────────────╯ -->
                <ldnpk-menustorecard 
                    title="Foundation" 
                    textposition="top"
                    class="h-full"
                    >

                    <img class=""
                        src="../../../stories/images/INSIGNIA-TEAL-Front.jpg" 
                        alt="Sweatshirt category image of woman wearing londonparkour sweatshirt" 
                        width="1280" 
                        height="1280">

                </ldnpk-menustorecard>
                


            <!--╭───────────────────────────────────────────────────────╮
                │                         ELEMENTS                      │
                ╰───────────────────────────────────────────────────────╯ -->
                <ldnpk-menustorecard 
                    title="Elements" 
                    textposition="top"
                    class="h-full"
                    >

                    <img class=""
                        src="../../../stories/images/ICON-BROWN-Front.jpg" 
                        alt="Sweatshirt category image of woman wearing londonparkour sweatshirt" 
                        width="1280" 
                        height="1280">

                </ldnpk-menustorecard>
                

            </div>

        </div>

        <!--╭───────────────────────────────────────────────────────╮
            │                       GIFT CARDS                      │
            ╰───────────────────────────────────────────────────────╯ -->
            
            <div class="
                relative
                row-span-1 md:row-span-3
                col-span-1
                rounded-r-md">

                <style>
                    ldnpk-button#gift-cards {
                        --backgroundColour: var(--color-stone-900);
                        --foregroundColour: var(--color-red-500);
                    }
                </style>
                <ldnpk-button id="gift-cards" class="
                    relative        md:absolute
                    bottom-0        lg:bottom-2
                    left-0          lg:left-2
                    text-white
                    w-auto
                    " href="https://londonparkour.com" size="small">GIFT CARDS</ldnpk-button>

                <img class="
                    hidden          md:block
                    object-cover 
                    h-full
                    w-full
                    rounded-r-md"
                    src="../../../stories/images/giftcards.png" 
                    alt="t-shirt design advert for gift cards" 
                    >
                
            </div>
        
    </div>

<!-- ╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │░
│                        REFERENCEABLE GLYPH ICONS                         │░
│                                                                          │░
╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->

    <!-- LDNPK LOGO  -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 185 120" id="logo">
            <path d="M24,24 L24,96 L106.639907,96 L59.9640453,24 L24,24 Z M78.3600926,24 L125.035955,96 L161,96 L161,24 L78.3600926,24 Z"></path>
        </symbol>
    </svg>

`