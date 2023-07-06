export const Support = /* html */`

    <style>

        /* Mobile default - 4 rows 
            - Top Button
            - Categories
            - Slideshow of Products
            - Gift Cards
        */
        #menuitem-support-grid { 
            grid-template-rows: repeat(4, minmax(0, auto)); 
        }

        /* Desktop - Convert to 3 rows 
            - Top Button
            - Headings
            - Content
        */
        @media (min-width: 768px) { 
            #menuitem-support-grid { 
                grid-template-rows: minmax(0, 4rem) minmax(0, 1rem) minmax(0, auto); 
            }
        }

        /* Override the button glyph colour */
        #menuitem-support-grid ldnpk-button svg{
            fill: var(--color-orange-500)
        }

    </style>



<!--╭──────────────────────────────────────────────────────╮
    │                  Main grid wrapper                   │░
    │              Contains all the contents               │░
    │              Mobile Default  - 2 Columns             │░
    │              Desktop         - 7 Columns             │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
    
    <div id="menuitem-support-grid" class="
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
                <use xlink:href="#glyph-support"></use>
            </svg>
            SUPPORT
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


            
                

            </div>

        </div>

        
    </div>

<!-- ╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │░
│                        REFERENCEABLE GLYPH ICONS                         │░
│                                                                          │░
╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


`