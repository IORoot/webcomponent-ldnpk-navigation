export const Support = /* html */`

    <style>

        /* Mobile default - 5 rows 
            - Top Button
            - HELP
            - Links
            - Social media
        */
        #menuitem-support-grid { 
            grid-template-rows: repeat(5, minmax(0, auto)); 
        }

        /* Desktop - Convert to 3 rows 
            - Top Button
            - Headings
            - Content
        */
        @media (min-width: 768px) { 
            #menuitem-support-grid { 
                grid-template-rows: 
                    minmax(0, 4rem) 
                    minmax(0, 1rem) 
                    minmax(0, auto); 
            }
        }

        /* Override the button glyph colour */
        #menuitem-support-grid ldnpk-button#top-button svg{
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
        grid-cols-1         md:grid-cols-4
        grid-flow-col       md:grid-flow-row
        gap-2               md:gap-4">



<!--╭──────────────────────────────────────────────────────╮
    │                      Top Button                      │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <ldnpk-button id="top-button" shadow href="https://londonparkour.com" target="" class="
            col-span-2  md:col-span-4
            w-full      md:w-auto
            overflow-hidden
            ">
            <!-- Glyph Prefix -->
            <svg class="fill-orange-500" slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
                <use xlink:href="#glyph-support"></use>
            </svg>
            SUPPORT
        </ldnpk-button>

        <div class="
            h-4
            text-white 
            hidden md:block">HELP</div>
        

        <div class="text-white 
            h-4
            hidden md:block
            col-span-2">TOP LINKS</div>

        <div class="text-white 
            h-4
            hidden md:block">SOCIAL MEDIA</div>




    <!--╭──────────────────────────────────────────────────────╮
        │                    HELP Buttons                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <div class="
            flex
            flex-row    sm:flex-col
            gap-2       sm:gap-4">
        
            <ldnpk-button shadow href="https://londonparkour.com" class="w-full text-orange-600">

                <svg slot="prefix" class="w-6 h-6 fill-orange-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"/></svg>
                
                <span class="hidden sm:inline">Support </span>Wiki
                <div class="text-orange-300" slot="description">Your questions answered</div>
            </ldnpk-button>


            <ldnpk-button shadow href="https://londonparkour.com" class="w-full text-stone-800">

                <svg slot="prefix" class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/></svg>
                
                Contact
                <div class="text-stone-500" slot="description">Real humans, no chatbots</div>
            </ldnpk-button>
        </div>




    <!--╭──────────────────────────────────────────────────────╮
        │                      Top Links                       │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->

        <style>
            #top-links ldnpk-button {
                --padding: 0rem;
            }
            @media (min-width: 768px) { 
                #top-links ldnpk-button {
                    --padding: 0.5rem 1rem;
                }
            }
        </style>

        <div id="top-links" class="
            col-span-2
            grid
            grid-cols-1             sm:grid-cols-2
            grid-rows-8             sm:grid-rows-4
            grid-flow-row
            gap-0
            w-full">

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                Class Locations
                <div class="text-orange-300" slot="description">Maps & Photos of where to meet</div>
            </ldnpk-button>

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                Pricing
                <div class="text-orange-300" slot="description">Payment processor, discounts and gift-cards</div>
            </ldnpk-button>

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                First time at classes
                <div class="text-orange-300" slot="description">What to expect, what to bring and more details</div>
            </ldnpk-button>

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                I'm late! What to do.
                <div class="text-orange-300" slot="description">How to find the class if you're late.</div>
            </ldnpk-button>




            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                Parkour FAQ
                <div class="text-orange-300" slot="description">Common questions and answers</div>
            </ldnpk-button>

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                I want to buy a present
                <div class="text-orange-300" slot="description">Purchasing gift cards</div>
            </ldnpk-button>

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                Do you do birthdays?
                <div class="text-orange-300" slot="description">All the details on private bookings</div>
            </ldnpk-button>

            <ldnpk-button href="https://londonparkour.com" shape="ghost" class="
                w-full
                text-orange-100" >
                Do I have to be fit?
                <div class="text-orange-300" slot="description">No. Find out why parkour is for anyone</div>
            </ldnpk-button>
        </div>



    <!--╭──────────────────────────────────────────────────────╮
        │                   Social Links                       │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            #social-links ldnpk-button {
                --padding: 0.2rem 0.5rem;
            }
            @media (min-width: 768px) { 
                #social-links ldnpk-button {
                    --padding: 0.5rem 1rem;
                }
            }
        </style>
        <div id="social-links" class="
            flex                            md:grid
            flex-row                        md:grid-cols-2
                                            md:grid-rows-3
            gap-1       sm:gap-2            md:gap-4
            mb-auto">


            <ldnpk-button shadow href="https://instagram.com/london_parkour" class="
                md:w-full
                text-pink-500" >
                <div class="hidden lg:block">Instagram</div>
                <svg slot="prefix" class="w-4 h-4 fill-pink-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </ldnpk-button>



            <ldnpk-button shadow href="https://github.com/ioroot" class="
                md:w-full" >
                <div class=" hidden lg:block">GitHub</div>
                <svg slot="prefix" class="w-4 h-4 fill-black" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </ldnpk-button>

            <ldnpk-button shadow href="https://youtube.com/londonparkour" class="
                md:w-full
                text-red-500" >
                <div class=" hidden lg:block">YouTube</div>
                <svg slot="prefix" class="w-4 h-4 fill-red-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </ldnpk-button>


            <ldnpk-button shadow href="https://www.facebook.com/thelondonparkour" class="
                md:w-full
                text-blue-500" >
                <div class=" hidden lg:block">Facebook</div>
                <svg slot="prefix" class="w-4 h-4 fill-blue-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </ldnpk-button>


            <ldnpk-button shadow href="https://www.google.com/search?q=londonparkour" class="
                md:w-full
                text-blue-500" >
                <div class=" hidden lg:block">Google</div>
                <svg slot="prefix" class="w-4 h-4 fill-blue-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Google My Business</title><path d="M3.273 1.636c-.736 0-1.363.492-1.568 1.16L0 9.272c0 1.664 1.336 3 3 3a3 3 0 003-3c0 1.664 1.336 3 3 3a3 3 0 003-3c0 1.65 1.35 3 3 3 1.664 0 3-1.336 3-3 0 1.664 1.336 3 3 3s3-1.336 3-3l-1.705-6.476a1.646 1.646 0 00-1.568-1.16zm8.729 9.326c-.604 1.063-1.703 1.81-3.002 1.81-1.304 0-2.398-.747-3-1.806-.604 1.06-1.702 1.806-3 1.806-.484 0-.944-.1-1.363-.277v8.232c0 .9.736 1.637 1.636 1.637h17.454c.9 0 1.636-.737 1.636-1.637v-8.232a3.48 3.48 0 01-1.363.277c-1.304 0-2.398-.746-3-1.804-.602 1.058-1.696 1.804-3 1.804-1.299 0-2.394-.75-2.998-1.81zm5.725 3.765c.808 0 1.488.298 2.007.782l-.859.859a1.623 1.623 0 00-1.148-.447c-.98 0-1.772.827-1.772 1.806 0 .98.792 1.807 1.772 1.807.882 0 1.485-.501 1.615-1.191h-1.615v-1.16h2.826c.035.196.054.4.054.613 0 1.714-1.147 2.931-2.88 2.931a3 3 0 010-6z"/></svg>
            </ldnpk-button>

            <ldnpk-button shadow href="https://twitter.com/london_parkour" class="
                md:w-full
                text-sky-500" >
                <div class=" hidden lg:block">Twitter</div>
                <svg slot="prefix" class="w-4 h-4 fill-sky-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>
            </ldnpk-button>

        </div>





    </div>

<!-- ╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │░
│                        REFERENCEABLE GLYPH ICONS                         │░
│                                                                          │░
╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->


`