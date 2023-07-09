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
        │                      NEWS Cards                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


        <ldnpk-menunewscard 
            id="news-one"
            title="Parkour Midjourney" 
            href="https://google.com"
            class="max-h-80"
            >
            <img class="
                object-scale-down 
                object-center
                h-full
                ls-is-cached
                lazyloaded
                "
                src="https://cdn.midjourney.com/119f05e4-abaf-4c6d-b07e-5eedcaa1c8dd/0_3.png" 
                alt="Midjourney Image" 
                width="1280" 
                height="1280">
        </ldnpk-menunewscard>



        <ldnpk-menunewscard 
            id="news-two"
            title="Using MidJourney to generate images" 
            href="https://google.com"
            layout="reversed"
            class="max-h-80"
            >
            <img class="
                object-scale-down 
                object-center
                h-full
                ls-is-cached
                lazyloaded
                "
                src="https://cdn.midjourney.com/8f474141-382f-452d-af8a-29d91bf862c6/0_0.png" 
                alt="Midjourney Image" 
                width="1280" 
                height="1280">
        </ldnpk-menunewscard>


    <!--╭──────────────────────────────────────────────────────╮
        │                  LATEST VIDEOS GRID                  │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->

        <div class="
            col-span-3 

            grid
            grid-cols-3
            grid-rows-2
            w-full
            h-full
            gap-4

            max-h-80
            ">

        <!--╭───────────────────────────────────────────────────────╮
            │                      Main Video                       │
            ╰───────────────────────────────────────────────────────╯ -->
            <ldnpk-menunewsvideo href="https://londonparkour.com" class="
                col-span-2
                row-span-2
                ">
                <img class="h-full" src="https://cdn.discordapp.com/attachments/1096477865765249134/1127137987470307358/pearsonmidjourney_knolling_of_all_known_computer_plug_types_for_698e3433-6720-4cbd-92a2-55903e4caf0c.png" />
                
            </ldnpk-menunewsvideo>

        <!--╭───────────────────────────────────────────────────────╮
            │                       Top Video                       │
            ╰───────────────────────────────────────────────────────╯ -->
            <ldnpk-menunewsvideo href="https://londonparkour.com" class="">

                <img src="https://cdn.discordapp.com/attachments/1096864430865797300/1127139184604348506/pearsonmidjourney_cockpit_of_space-ship_with_fighter-pilot_in_f_2c9282e1-b860-4be1-b56f-237727256e37.png">
            </ldnpk-menunewsvideo>

        <!--╭───────────────────────────────────────────────────────╮
            │                    Bottom Video                       │
            ╰───────────────────────────────────────────────────────╯ -->
            <ldnpk-menunewsvideo href="https://londonparkour.com" class="">

                <img src="https://cdn.discordapp.com/attachments/1096864430865797300/1127139613748777020/pearsonmidjourney_space_craft_style_of_chriss_foss_4bba7335-297c-4238-bfd8-3f9f5167030d.png">
            </ldnpk-menunewsvideo>
        </div>

    <!--╭──────────────────────────────────────────────────────╮
        │                     PULSE LINKS                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->

        <ul class="text-white font-light">
            <li>
                <a>Full Dashboard</a>
            </li>

            <li>
                <a>Curated Videos</a>
            </li>

            <li>
                <a>Daily Trending</a>
            </li>

            <li>
                <a>Weekly Hits</a>
            </li>

            <li>
                <a>Monthly Popular</a>
            </li>

            <li>
                <a>Podcasts</a>
            </li>

            <li>
                <a>Female Athletes</a>
            </li>

            <li>
                <a>Parkour Teams</a>
            </li>

            <li>
                <a>Random Historical</a>
            </li>

            <li>
                <a>Daily Underdogs</a>
            </li>
        </ul>

    </div>

<!-- ╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │░
│                        REFERENCEABLE GLYPH ICONS                         │░
│                                                                          │░
╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


`