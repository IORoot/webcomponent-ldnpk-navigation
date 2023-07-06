export const News = /* html */`

    <style>

        /* Mobile default - 4 rows 
            - Top Button
            - Categories
            - Slideshow of Products
            - Gift Cards
        */
        #menuitem-news-grid { 
            grid-template-rows: repeat(4, minmax(0, auto)); 
        }

        /* Desktop - Convert to 3 rows 
            - Top Button
            - Headings
            - Content
        */
        @media (min-width: 768px) { 
            #menuitem-news-grid { 
                grid-template-rows: minmax(0, 4rem) minmax(0, 1rem) minmax(0, auto); 
            }
        }

        /* Override the button glyph colour */
        #menuitem-news-grid ldnpk-button svg{
            fill: var(--color-purple-500)
        }

    </style>



<!--╭──────────────────────────────────────────────────────╮
    │                  Main grid wrapper                   │░
    │              Contains all the contents               │░
    │              Mobile Default  - 2 Columns             │░
    │              Desktop         - 7 Columns             │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
    
    <div id="menuitem-news-grid" class="
        grid
        grid-cols-2         md:grid-cols-6
        grid-flow-row
        gap-2               md:gap-4">



    <!--╭──────────────────────────────────────────────────────╮
        │                      Top Button                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <ldnpk-button shadow href="https://londonparkour.com" target="" class="
            col-span-2 md:col-span-6
            ">
            <!-- Glyph Prefix -->
            <svg slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
                <use xlink:href="#glyph-news"></use>
            </svg>
            NEWS
        </ldnpk-button>

    <!--╭──────────────────────────────────────────────────────╮
        │                      Headings                        │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <div class="
            h-4
            text-white 
            hidden md:block
            col-span-2">LATEST POSTS</div>

        <div class="text-white 
            h-4
            hidden md:block
            col-span-3">LATEST VIDEOS</div>

        <div class="text-white 
            h-4
            hidden md:block
            col-span-1">PULSE</div>
        

    <!--╭──────────────────────────────────────────────────────╮
        │                        Content                       │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->









        
    </div>

<!-- ╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │░
│                        REFERENCEABLE GLYPH ICONS                         │░
│                                                                          │░
╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


`