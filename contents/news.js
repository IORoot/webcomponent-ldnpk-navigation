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
                object-cover
                object-center
                h-full
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
                object-cover 
                object-center
                h-full
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
                <img class="h-full w-full object-cover" src="https://cdn.discordapp.com/attachments/1096477865765249134/1127137987470307358/pearsonmidjourney_knolling_of_all_known_computer_plug_types_for_698e3433-6720-4cbd-92a2-55903e4caf0c.png" />
                
            </ldnpk-menunewsvideo>

        <!--╭───────────────────────────────────────────────────────╮
            │                       Top Video                       │
            ╰───────────────────────────────────────────────────────╯ -->
            <ldnpk-menunewsvideo href="https://londonparkour.com" class="">

                <img class="h-full w-full object-cover" src="https://cdn.discordapp.com/attachments/1096864430865797300/1127139184604348506/pearsonmidjourney_cockpit_of_space-ship_with_fighter-pilot_in_f_2c9282e1-b860-4be1-b56f-237727256e37.png">
            </ldnpk-menunewsvideo>

        <!--╭───────────────────────────────────────────────────────╮
            │                    Bottom Video                       │
            ╰───────────────────────────────────────────────────────╯ -->
            <ldnpk-menunewsvideo href="https://londonparkour.com" class="">

                <img class="h-full w-full object-cover" src="https://cdn.discordapp.com/attachments/1096864430865797300/1127139613748777020/pearsonmidjourney_space_craft_style_of_chriss_foss_4bba7335-297c-4238-bfd8-3f9f5167030d.png">
            </ldnpk-menunewsvideo>
        </div>

    <!--╭──────────────────────────────────────────────────────╮
        │                     PULSE LINKS                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            #pulse-links ldnpk-linkicon { --glyphColour: var(--color-purple-400); }
        </style>
        <ul id="pulse-links" class="text-white font-light">
            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Full Dashboard
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Curated Videos
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Daily Trending
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Weekly Hits
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Monthly Popular
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Podcasts
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Female Athletes
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Parkour Teams
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Random Historical
                </ldnpk-linkicon>
            </li>

            <li>
                <ldnpk-linkicon href="https://londonparkour.com">
                    Daily Underdogs
                </ldnpk-linkicon>
            </li>
        </ul>




    <!--╭──────────────────────────────────────────────────────╮
        │                    BOTTOM LINKS                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


        <ldnpk-linkIcon class="col-span-2 text-white fill-white" href="https://londonparkour.com" >
            All Posts
            <svg slot="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z"/></svg>
        </ldnpk-linkIcon>

        <ldnpk-linkIcon class="col-span-4 text-white fill-white" href="https://londonparkour.com" >
            All Videos
            <svg slot="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z"/></svg>
        </ldnpk-linkIcon>

    </div>

<!-- ╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │░
│                        REFERENCEABLE GLYPH ICONS                         │░
│                                                                          │░
╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


`