export const Classes = /* html */`

    <style>

        /* Mobile default - 7 rows */
        #menuitem-classes-grid { 
            grid-template-rows: repeat(7, minmax(0, auto)); 
        }

        /* Desktop - Convert to 2 rows */
        @media (min-width: 768px) { 
            #menuitem-classes-grid { 
                grid-template-rows: repeat(2, minmax(0, auto)); 
            }
        }

        /* Override the button glyph colour */
        #menuitem-classes-grid ldnpk-button svg{
            fill: var(--color-blue-500)
        }
    </style>

        
<!--╭──────────────────────────────────────────────────────╮
    │                  Main grid wrapper                   │░
    │              Contains all the contents               │░
    │              Mobile Default  - 1 Column              │░
    │             Desktop         - 6 Columns              │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
    
    <div id="menuitem-classes-grid" class="
        grid
        grid-cols-1         md:grid-cols-6
        grid-flow-col
        gap-2               md:gap-4">



<!--╭──────────────────────────────────────────────────────╮
    │                      Top Button                      │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <ldnpk-button shadow href="https://londonparkour.com" target="" class="
            col-span-1 md:col-span-6">
            <!-- Glyph Prefix -->
            <svg slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
                <use xlink:href="#glyph-classes"></use>
            </svg>
            CLASSES
        </ldnpk-button>


    <!--╭──────────────────────────────────────────────────────╮
        │                   SATURDAY ADULTS                    │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        
        <style>
            #classes-sat-adult {
                --glyphColour:      var(--color-amber-500); 
                --hoverColour:      var(--color-amber-50);
                --foregroundColour: var(--color-stone-100);
            }
        </style>


        <ldnpk-menuclasscard 
            id="classes-sat-adult"
            title="Saturday Adult Class" 
            subtitle="10.30am @Canada Water"
            href="https://google.com"
            >

            <picture>
                
                <img class="
                    object-scale-down 
                    object-center
                    h-full
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Kevin_Fly.webp" 
                    alt="Kevin Flies towards the camera like a hero" 
                    width="1280" 
                    height="1280">
            </picture>

            <svg slot="glyph" role="img" class="w-full h-full">
                <use xlink:href="#glyph-class-sat-adult"></use>
            </svg>

        </ldnpk-menuclasscard>


    <!--╭──────────────────────────────────────────────────────╮
        │                   SATURDAY YOUTH                     │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            ldnpk-menuclasscard#classes-sat-youth {
                --glyphColour: var(--color-blue-500);
                --hoverColour: var(--color-blue-50);
                --foregroundColour: var(--color-stone-100);
            }
        </style>
        <ldnpk-menuclasscard 
            id="classes-sat-youth"
            title="Saturday Youth Class" 
            subtitle="10.30am @Canada Water"
            href="https://londonparkour.com"
            >

            <picture>
                
                <img class="
                    object-scale-down 
                    object-center
                    h-full
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Kevin_Fly.webp" 
                    alt="Kevin Flies towards the camera like a hero" 
                    width="1280" 
                    height="1280">
            </picture>


            <svg slot="glyph" role="img" class="w-full h-full">
                <use xlink:href="#glyph-class-sat-youth"></use>
            </svg>

        </ldnpk-menuclasscard>



    <!--╭──────────────────────────────────────────────────────╮
        │                   SUNDAY 6 TO 9s                     │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            ldnpk-menuclasscard#classes-sun-kids {
                --glyphColour: var(--color-green-600);
                --hoverColour: var(--color-green-50);
                --foregroundColour: var(--color-stone-100);
            }
        </style>
        <ldnpk-menuclasscard 
            id="classes-sun-kids"
            title="Sunday 6 to 9s Class" 
            subtitle="09.00am @Vauxhall"
            href="https://londonparkour.com"
            >

            <picture>
                
                <img class="
                    object-scale-down 
                    object-center
                    h-full
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Kevin_Fly.webp" 
                    alt="Kevin Flies towards the camera like a hero" 
                    width="1280" 
                    height="1280">
            </picture>


            <svg slot="glyph" role="img" class="w-full h-full">
                <use xlink:href="#glyph-class-sun-kids"></use>
            </svg>

        </ldnpk-menuclasscard>


    <!--╭──────────────────────────────────────────────────────╮
        │                 SUNDAY 10 TO 14s                     │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            ldnpk-menuclasscard#classes-sat-teens {
                --glyphColour: var(--color-purple-600);
                --hoverColour: var(--color-purple-50);
                --foregroundColour: var(--color-stone-100);
            }
        </style>
        <ldnpk-menuclasscard 
            id="classes-sat-teens"
            title="Sunday 10 to 14s Class" 
            subtitle="10.45am @Vauxhall"
            href="https://londonparkour.com"
            >

            <picture>
                
                <img class="
                    object-scale-down 
                    object-center
                    h-full
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Kevin_Fly.webp" 
                    alt="Kevin Flies towards the camera like a hero" 
                    width="1280" 
                    height="1280">
            </picture>


            <svg slot="glyph" role="img" class="w-full h-full">
                <use xlink:href="#glyph-class-sun-teens"></use>
            </svg>

        </ldnpk-menuclasscard>



    <!--╭──────────────────────────────────────────────────────╮
        │                    SUNDAY ADULTS                     │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            ldnpk-menuclasscard#classes-sun-adult {
                --glyphColour: var(--color-red-600);
                --hoverColour: var(--color-red-50);
                --foregroundColour: var(--color-stone-100);
            }
        </style>
        <ldnpk-menuclasscard 
            id="classes-sun-adult"
            title="Sunday Adult Class" 
            subtitle="11.00am @Archway"
            href="https://londonparkour.com"
            >

            <picture>
                
                <img class="
                    object-scale-down 
                    object-center
                    h-full
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Kevin_Fly.webp" 
                    alt="Kevin Flies towards the camera like a hero" 
                    width="1280" 
                    height="1280">
            </picture>


            <svg slot="glyph" role="img" class="w-full h-full">
                <use xlink:href="#glyph-class-sun-adult"></use>
            </svg>

        </ldnpk-menuclasscard>



    <!--╭──────────────────────────────────────────────────────╮
        │                  PRIVATE BOOKINGS                    │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <style>
            ldnpk-menuclasscard#private-booking {
                --glyphColour: var(--color-stone-900);
                --hoverColour: var(--color-stone-50);
                --foregroundColour: var(--color-stone-100);
            }
        </style>
        <ldnpk-menuclasscard 
            id="private-booking"
            title="Private Bookings" 
            subtitle="By Arrangement"
            href="https://londonparkour.com"
            >

            <picture>
                
                <img class="
                    object-scale-down 
                    object-center
                    h-full
                    ls-is-cached
                    lazyloaded
                    "
                    src="../../../stories/images/Kevin_Fly.webp" 
                    alt="Kevin Flies towards the camera like a hero" 
                    width="1280" 
                    height="1280">
            </picture>


            <svg slot="glyph" role="img" class="w-full h-full">
                <use xlink:href="#glyph-private-bookings"></use>
            </svg>

        </ldnpk-menuclasscard>

        
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

    <!-- SATURDAY ADULTS  -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 180 180" id="glyph-class-sat-adult">
            <path d="M88.4706 18.5457C128.911 18.5457 161.694 51.3294 161.694 91.7702V179.546H149.49V91.7702C149.49 58.0695 122.171 30.7497 88.4706 30.7497H0.693848V18.5457H88.4706ZM88.4706 55.1579C108.691 55.1579 125.082 71.5498 125.082 91.7702V179.546H112.878V91.7702C112.878 78.2899 101.951 67.362 88.4706 67.362H0.693848V55.1579H88.4706ZM88.4706 0.239532C139.021 0.239532 180 41.2192 180 91.7702V179.546H167.796V91.7702C167.796 47.9593 132.281 12.4436 88.4706 12.4436H0.693848V0.239532H88.4706ZM88.4706 36.8518C118.801 36.8518 143.388 61.4396 143.388 91.7702H143.287V179.546H131.184V91.7702C131.184 68.1797 112.061 49.0559 88.4706 49.0559H0.693848V36.8518H88.4706Z"/>
        </symbol>
    </svg>


    <!-- SATURDAY YOUTH -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 208 177" id="glyph-class-sat-youth">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M173.25 14.1943L103.134 131.295L33.0188 14.1943H21.8166L102.324 149.199L182.832 14.1943H173.25ZM103.134 103.779L49.4947 14.1943H60.5232L102.324 84.312L144.125 14.1943H156.775L103.134 103.779ZM136.278 0.06707H152.547H165.234H181.709L207.63 0.0670828L102.324 176.657L-2.9819 0.0670828H24.5599L24.5599 0.06707H41.0358H52.1012H68.3703H136.278ZM76.7923 14.1943H127.856L102.324 57.0219L76.7923 14.1943Z" />
        </symbol>
    </svg>

    
    <!-- SUNDAY ADULT -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 180 182" id="glyph-class-sun-adult">
        <path d="M180 181.486H168.046L168.046 169.492H162.069L162.069 181.486H150.116L150.115 169.492H144.038L144.039 181.486H132.185L132.185 169.492H126.208L126.208 181.486H114.254L114.254 169.492L90.3469 169.493C40.8329 169.493 0.693848 129.024 0.693848 79.1046H12.6476C12.6476 122.369 47.4348 157.441 90.3469 157.441H180V181.486ZM30.5782 79.1046C30.5782 112.385 57.3376 139.363 90.3469 139.363H180V151.415H90.3469C50.7357 151.415 18.6245 119.041 18.6245 79.1046H30.5782ZM48.5088 79.1046C48.5088 102.401 67.2404 121.286 90.3469 121.286H180V133.337H90.3469C60.6385 133.337 36.5551 109.057 36.5551 79.1046H48.5088ZM66.4394 79.1046C66.4394 92.4166 77.1432 103.208 90.3469 103.208H180V115.26H90.3469C70.5413 115.26 54.4857 99.0726 54.4857 79.1046H66.4394ZM0.693848 0.768372H12.6476L12.6462 12.7607H18.6231L18.6245 0.768372H30.5782L30.577 12.7607H36.6539L36.6546 0.768372H48.5088L48.5077 12.7607H54.4846L54.4857 0.768372H66.4394L66.4385 12.7607L90.3469 12.7622C139.861 12.7622 180 53.2303 180 103.15H168.046C168.046 59.8862 133.259 24.8139 90.3469 24.8139H0.693848V0.768372ZM90.3469 30.8398C129.958 30.8398 162.069 63.2142 162.069 103.15H150.116C150.116 69.8702 123.356 42.8915 90.3469 42.8915H0.693848V30.8398H90.3469ZM90.3469 48.9174C120.055 48.9174 144.139 73.1982 144.139 103.15H132.185C132.185 79.8542 113.453 60.9691 90.3469 60.9691H0.693848V48.9174H90.3469ZM90.3469 66.995C110.153 66.995 126.208 83.1822 126.208 103.15H114.254C114.254 89.8382 103.551 79.0467 90.3469 79.0467H0.693848V66.995H90.3469Z" />
        </symbol>
    </svg>

    
    
    <!-- SUNDAY KIDS -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 202 213" id="glyph-class-sun-kids">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M201.572 138.034L153.2 48.4726L63.6386 0.100691L51.2816 12.4577L140.843 60.8296L189.215 150.391L201.572 138.034ZM132.606 69.0676L180.977 158.629L168.62 170.986L120.249 81.4246L30.6867 33.0526L43.0437 20.6957L132.606 69.0676ZM160.383 179.224L112.011 89.6625L22.4488 41.2906L10.0918 53.6476L99.6536 102.02L148.026 191.581L160.383 179.224ZM139.788 199.819L91.4157 110.258L1.85385 61.8856L-10.5031 74.2426L79.0587 122.614L127.431 212.176L139.788 199.819Z" />
        </symbol>
    </svg>
    
    
    <!-- SUNDAY TEENS -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 208 224" id="glyph-class-sun-teens">
        <path d="M101.098 35.8537L100.668 183.229L-19.5628 102.132L48.8934 0.641493L101.098 35.8537ZM230.192 122.396L161.736 223.886L112.137 190.432L114.28 44.2122L230.192 122.396ZM87.761 42.9184L52.4866 19.1255L-1.07715 98.5371L87.4254 158.233L87.761 42.9184ZM211.706 125.988L127.233 69.01L125.557 183.421L158.142 205.399L211.706 125.988ZM199.622 128.077L155.569 193.387L134.993 179.508L135.02 84.5022L199.622 128.077ZM78.3021 45.7453L78.04 140.592L10.6861 95.1613L54.7383 29.8512L78.3021 45.7453ZM181.136 131.67L148.329 109.542L148.311 172.429L151.976 174.902L181.136 131.67ZM64.9662 52.8107L58.3313 48.3354L29.1715 91.5667L64.7924 115.593L64.9662 52.8107ZM55.9078 66.6032L55.2584 100.584L39.9514 90.2596L55.9078 66.6032ZM170.247 133.997L154.291 157.654L154.94 123.673L170.247 133.997Z"/>
        </symbol>
    </svg>

    
    
    <!-- PRIVATE BOOKING -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 180 182" id="glyph-private-bookings">
        <path d="M90.3469 163.415C101.547 163.415 111.519 168.945 117.932 177.552C112.639 179.4 107.121 180.73 101.433 181.486C98.2139 179.378 94.4154 178.162 90.3469 178.162C86.2785 178.162 82.4799 179.378 79.2618 181.484C73.5733 180.73 68.0553 179.4 62.7614 177.553C69.1748 168.945 79.1472 163.415 90.3469 163.415ZM91.0368 135.612C112.658 135.612 131.691 146.986 142.759 164.221C138.908 167.053 134.827 169.576 130.55 171.755C121.983 158.756 107.482 150.211 91.0368 150.211C74.591 150.211 60.0905 158.756 51.5226 171.754C47.2466 169.576 43.1654 167.053 39.3136 164.223C50.3829 146.986 69.4152 135.612 91.0368 135.612ZM101.084 0.768372C106.119 1.34426 111.028 2.34795 115.774 3.74294C109.116 15.1448 105.293 28.4634 105.293 42.6919C105.293 83.3551 136.516 116.586 175.862 118.842C174.322 123.728 172.383 128.435 170.087 132.921C159.502 131.71 149.478 128.61 140.347 123.958C148.86 129.733 156.341 136.961 162.452 145.294C159.608 149.176 156.467 152.815 153.062 156.181L152.771 156.464C139.282 136.449 116.664 123.322 91.0381 123.322C65.412 123.322 42.7942 136.449 29.305 156.464L29.0139 156.181C25.6093 152.815 22.4676 149.175 19.623 145.296C25.7347 136.96 33.2162 129.732 41.7282 123.957C32.5982 128.61 22.5745 131.71 11.9897 132.921C9.69308 128.435 7.75432 123.728 6.21096 118.84C45.5597 116.586 76.7831 83.3551 76.7831 42.6919C76.7831 28.4634 72.9602 15.1448 66.304 3.74494C71.048 2.34795 75.9568 1.34426 80.9925 0.768372C87.1977 12.8938 90.7945 26.6252 91.0262 41.1903L91.0381 42.6919C91.0381 27.6477 94.6281 13.458 100.983 0.964172L101.084 0.768372ZM91.0363 42.4725C91.0363 74.3786 75.4225 102.482 51.7271 118.93C63.5583 112.762 76.9087 109.292 91.0363 109.292C105.164 109.292 118.514 112.762 130.346 118.929C106.65 102.482 91.0363 74.3786 91.0363 42.4725ZM62.7614 41.9652C62.7614 76.3956 35.6152 104.383 1.88676 105.029C1.10154 100.196 0.693848 95.2354 0.693848 90.1777L0.696701 90.54L1.48429 90.5337C27.5184 90.1047 48.493 68.5242 48.493 41.9652C48.493 31.9074 45.485 22.5636 40.3334 14.8121C44.2836 12.1231 48.4591 9.74743 52.8235 7.71906C59.1113 17.5814 62.7614 29.3401 62.7614 41.9652ZM127.871 7.71906C132.235 9.74743 136.411 12.1231 140.363 14.8114C135.21 22.5637 132.202 31.9076 132.202 41.9654C132.202 68.7917 153.601 90.539 180 90.5406C179.983 95.4732 179.576 100.312 178.811 105.029C145.08 104.383 117.932 76.3959 117.932 41.9654C117.932 29.4246 121.534 17.7386 127.743 7.91729L127.871 7.71906ZM37.9344 42.5258C37.9344 62.2012 21.9506 78.2001 2.07313 78.6161C2.75239 73.5344 3.86238 68.5872 5.36447 63.8096C15.56 61.9247 23.2722 53.1122 23.2722 42.5258C23.2722 39.4938 22.6396 36.6074 21.4974 33.9875C24.7215 30.0421 28.2767 26.3696 32.1206 23.0106C35.8002 28.6378 37.9344 35.3363 37.9344 42.5258ZM148.573 23.0106C152.417 26.3697 155.972 30.0422 159.197 33.9876C158.054 36.6077 157.421 39.4942 157.421 42.5262C157.421 53.1128 165.133 61.9255 175.326 63.8124C176.83 68.5881 177.94 73.5355 178.621 78.6161C158.743 78.2012 142.759 62.202 142.759 42.5262C142.759 35.3488 144.886 28.6606 148.553 23.0396L148.573 23.0106Z" />
        </symbol>
    </svg>
`