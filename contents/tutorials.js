export let Tutorials = /* html */`

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
        #menuitem-classes-grid ldnpk-button#tutorials-page svg{
            fill: var(--color-green-500)
        }

        #menuitem-classes-grid ldnpk-button#button-demos svg {
            fill: var(--color-amber-500)
        }

        #menuitem-classes-grid ldnpk-button#button-tutorials svg {
            fill: var(--color-purple-500)
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
        grid-cols-2         md:grid-cols-6
        grid-flow-col       md:grid-flow-row
        gap-2               md:gap-4">



<!--╭──────────────────────────────────────────────────────╮
    │                      Top Button                      │░
    ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <ldnpk-button id="tutorials-page" shadow href="https://londonparkour.com" target="" class="
            col-span-2 md:col-span-1 w-full overflow-hidden">
            <!-- Glyph Prefix -->
            <svg slot="prefix" role="img" aria-label="glyph" style="width:2rem;height:2rem">
                <use xlink:href="#glyph-tutorials"></use>
            </svg>
            TUTORIALS
        </ldnpk-button>


        <div class="hidden md:block col-span-2"></div>


    <!--╭──────────────────────────────────────────────────────╮
        │                    Main Buttons                      │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        <div class="
            col-span-2      md:col-span-3
            hidden          md:grid
            grid-cols-3
            grid-flow-cols
            gap-4
            
            ">

            <ldnpk-button id="button-techniques" class="overflow-hidden w-full" shadow href="https://londonparkour.com" target="" class="
                col-span-1 md:col-span-1 
                w-full">
                <!-- Glyph Suffix -->
                <svg slot="suffix" role="img" aria-label="glyph" style="width:1.5rem;height:2rem">
                    <use xlink:href="#syllabus-techniques"></use>
                </svg>
                Techniques
                <div slot="description" class="text-green-400">430 movements</div>
            </ldnpk-button>


            <ldnpk-button id="button-demos" class="overflow-hidden w-full" shadow href="https://londonparkour.com" target="" class="
                col-span-1 md:col-span-1 
                w-full 
                ">
                <!-- Glyph Suffix -->
                <svg slot="suffix" role="img" aria-label="glyph" style="width:1.5rem;height:2rem">
                    <use xlink:href="#syllabus-demos"></use>
                </svg>
                Demos
                <div slot="description" class="text-green-400">247 videos</div>
            </ldnpk-button>


            <ldnpk-button id="button-tutorials" class="overflow-hidden w-full" shadow href="https://londonparkour.com" target="" class="
                col-span-1 md:col-span-1 
                w-full 
                ">
                <!-- Glyph Suffix -->
                <svg slot="suffix" role="img" aria-label="glyph" style="width:1.5rem;height:2rem">
                    <use xlink:href="#syllabus-tutorials"></use>
                </svg>
                Syllabus
                <div slot="description" class="text-green-400">151 video</div>
            </ldnpk-button>

        </div>


    <!--╭──────────────────────────────────────────────────────╮
        │                  SYLLABUS BUTTONS                    │░
        ╰░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
        
        <style>
            #tutorial-vaulting,
            #tutorial-swinging,
            #tutorial-strengthening,
            #tutorial-spinning,
            #tutorial-rolling,
            #tutorial-passing,
            #tutorial-jumping,
            #tutorial-flowing,
            #tutorial-crawling,
            #tutorial-climbing,
            #tutorial-balancing {
                --glyphColour:      var(--color-stone-600);
                --backgroundColour: var(--color-stone-800);
                --foregroundColour: var(--color-stone-100);
                --hoverColour:      var(--color-emerald-500);
            }
        </style>

        <ldnpk-menuclasscard 
            id="tutorial-balancing"
            title="Balancing"
            href="https://google.com"
            class="text-stone-200"
            >
            
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#balancing"></use>
            </svg>
            
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-climbing"
            title="Climbing"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#climbing"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-crawling"
            title="Crawling"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#crawling"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-flowing"
            title="Flowing"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#flowing"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-jumping"
            title="Jumping"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#jumping"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-passing"
            title="Passing"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#passing"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-rolling"
            title="Rolling"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#rolling"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-spinning"
            title="Spinning"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#spinning"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-strengthening"
            title="Strengthening"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#strengthening"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-swinging"
            title="Swinging"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#swinging"></use>
            </svg>
        </ldnpk-menuclasscard>

        <ldnpk-menuclasscard 
            id="tutorial-vaulting"
            title="Vaulting"
            href="https://google.com"
            class="text-stone-200"
            >
            <svg slot="glyph" role="img" class="
            w-full 
            h-full 
            md:w-32 
            md:h-32 
            mx-auto">
                <use xlink:href="#vaulting"></use>
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


    <!-- Balancing -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 150 80" id="balancing">
        <path d="M72.6159 -4.94188L72.36 82.8591L0.730584 34.5444L41.5144 -25.9201L72.6159 -4.94188ZM149.526 46.6168L108.742 107.081L79.193 87.1504L80.4695 0.0378521L149.526 46.6168ZM64.6704 -0.732996L43.6551 -14.908L11.7437 32.4027L64.4705 67.9674L64.6704 -0.732996ZM138.512 48.7567L88.1864 14.8115L87.1881 82.9734L106.601 96.0674L138.512 48.7567ZM131.313 50.0014L105.068 88.9109L92.8097 80.6423L92.8256 24.0412L131.313 50.0014ZM59.0351 0.951171L58.8789 57.4576L18.7518 30.3916L44.9966 -8.51794L59.0351 0.951171ZM120.3 52.1423L100.755 38.9588L100.744 76.4251L102.927 77.898L120.3 52.1423ZM51.0901 5.16054L47.1372 2.49431L29.7648 28.25L50.9865 42.5642L51.0901 5.16054ZM45.6933 13.3776L45.3065 33.6224L36.1871 27.4713L45.6933 13.3776ZM113.813 53.5287L104.306 67.6224L104.693 47.3776L113.813 53.5287Z"/>
        </symbol>
    </svg>


    <!-- Climbing -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 126 80" id="climbing">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M125.785 65.0255L97.0949 11.9052L43.9746 -16.7849L36.6455 -9.45577L89.7658 19.2342L118.456 72.3546L125.785 65.0255ZM84.8798 24.1203L113.57 77.2406L106.241 84.5697L77.5507 31.4494L24.4304 2.75938L31.7595 -4.56971L84.8798 24.1203ZM101.355 89.4558L72.6647 36.3355L19.5443 7.64543L12.2153 14.9745L65.3356 43.6645L94.0256 96.7848L101.355 89.4558ZM89.1395 101.671L60.4495 48.5506L7.32919 19.8606L9.34789e-05 27.1897L53.1204 55.8797L81.8104 109L89.1395 101.671Z" />
        </symbol>
    </svg>


    <!-- Crawling -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 151 80" id="crawling">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.9722 11.302L46.1511 -0.0439148L0.767334 67.2403L17.5884 78.5862L62.9722 11.302ZM92.2341 11.4603L75.4131 0.11438L30.0293 67.3986L46.8504 78.7445L92.2341 11.4603ZM104.675 0.272659L121.496 11.6186L76.1124 78.9028L59.2913 67.5569L104.675 0.272659ZM150.758 11.7769L133.937 0.430954L88.5534 67.7152L105.374 79.0611L150.758 11.7769Z" />
        </symbol>
    </svg>


    <!-- Flowing -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 126 80" id="flowing">
        <path d="M126 0V60H106V0H126ZM96 0V60H80V0H96ZM70 0V60H60V0H70ZM50 0V60H42V0H50ZM32 0V60H26V0H32ZM16 0V60H12V0H16ZM2 0V60H0V0H2Z" />
        </symbol>
    </svg>


    <!-- Jumping -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 159 80" id="jumping">
        <path d="M85.6446 85.9251V40.9251C85.6446 40.6755 85.6495 40.427 85.6591 40.1797C85.6077 37.2341 85.2416 34.3652 84.5943 31.6047C83.3651 34.2119 82.6364 37.0999 82.5299 40.1462C82.5365 40.4053 82.5391 40.6649 82.5391 40.9251V85.9251H76.2826V40.9251H76.2598C76.2598 40.658 76.2635 40.3918 76.2709 40.1265C76.1937 36.9792 75.65 33.9474 74.7077 31.0971C73.7641 33.9474 73.2204 36.9792 73.1415 40.1264C73.1506 40.3918 73.1543 40.658 73.1543 40.9251H73.1315V85.9251H66.875V40.9251C66.875 40.6659 66.8776 40.4073 66.8829 40.1493C66.7782 37.1022 66.0496 34.2135 64.8218 31.6063C64.1724 34.3659 63.8064 37.2345 63.7535 40.1795C63.7647 40.427 63.7696 40.6755 63.7696 40.9251V85.9251H57.4902V40.9251C57.4902 40.704 57.4918 40.4833 57.4948 40.263C57.1519 33.6602 51.6889 28.4118 45 28.4118H0V22.1551H45C50.6366 22.1551 55.6929 24.6398 59.1334 28.5736C59.4471 27.4185 59.8042 26.2819 60.2024 25.1648C56.2651 21.3646 50.9056 19.0267 45 19.0267H0V12.7701H45C51.7716 12.7701 57.9848 15.1607 62.8417 19.1441C63.3327 18.2068 63.8553 17.2885 64.4074 16.3901C59.0755 12.1645 52.3324 9.64171 45 9.64171H0V3.38503H45C53.6831 3.38503 61.6776 6.33317 68.0372 11.2831C68.696 10.4738 69.3832 9.6863 70.0956 8.92264C63.1847 3.49394 54.4704 0.256684 45 0.256684H0V-6H45C56.2732 -6 66.6179 -2.02455 74.7087 4.60092C82.7971 -2.02488 93.1414 -6 104.414 -6H149.414V0.256684H104.414C94.9437 0.256684 86.2294 3.49394 79.3174 8.92226C80.0309 9.68631 80.7182 10.4738 81.3789 11.2837C87.7366 6.33317 95.7311 3.38503 104.414 3.38503H149.414V9.64171H104.414C97.0818 9.64171 90.3386 12.1645 85.0052 16.3894C85.559 17.2888 86.0818 18.2074 86.5739 19.1448C91.4289 15.1609 97.6423 12.7701 104.414 12.7701H149.414V19.0267H104.414C98.5086 19.0267 93.149 21.3646 89.2104 25.1652C89.6099 26.2819 89.967 27.4185 90.2812 28.5728C93.7212 24.6398 98.7775 22.1551 104.414 22.1551H149.414V28.4118H104.414C97.7253 28.4118 92.2622 33.6602 91.9183 40.2636C91.9223 40.4833 91.9239 40.704 91.9239 40.9251V85.9251H85.6446ZM69.0206 20.8831L68.8828 21.1267C68.3714 22.0425 67.8945 22.9801 67.4536 23.9378C68.208 24.9325 68.8972 25.979 69.5156 27.0709C69.9799 25.8986 70.5031 24.7551 71.0802 23.6442C70.4442 22.6856 69.7561 21.7638 69.0206 20.8831ZM80.394 20.8828L80.3516 20.9334C79.6321 21.7986 78.9583 22.7032 78.334 23.6435C78.9107 24.7544 79.4341 25.8983 79.9 27.0711C80.5144 25.9834 81.2005 24.941 81.9507 23.9497L81.9601 23.9368C81.4801 22.8943 80.9573 21.8755 80.394 20.8828ZM74.7078 13.1522L74.364 13.5229C73.7703 14.1735 73.1975 14.8436 72.6466 15.5319C73.3684 16.3158 74.0555 17.1301 74.7076 17.9729C75.3586 17.1301 76.0457 16.3158 76.7657 15.5322C76.1114 14.7121 75.4242 13.9183 74.7078 13.1522Z" />
        </symbol>
    </svg>


    <!-- Passing -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 130 80" id="passing">
        <path d="M65 -3L72.2222 4.22222L36.1111 40.3333L72.2222 76.4444L65 83.6667L21.6667 40.3333L65 -3ZM43.3333 -3L50.5556 4.22222L14.4444 40.3333L50.5556 76.4444L43.3333 83.6667L0 40.3333L43.3333 -3ZM79.4444 11.4444L108.333 40.3333L79.4444 69.2222L72.2222 62L93.8889 40.3333L72.2222 18.6667L79.4444 11.4444ZM101.111 11.4444L130 40.3333L101.111 69.2222L93.8889 62L115.556 40.3333L93.8889 18.6667L101.111 11.4444Z" />
        </symbol>
    </svg>



    <!-- Rolling -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 122 80" id="rolling">
        <path d="M61 88.8C68.6203 88.8 75.4055 92.5335 79.7692 98.3442C76.1672 99.5917 72.4128 100.49 68.5427 101C66.3527 99.5769 63.7682 98.7558 61 98.7558C58.2318 98.7558 55.6473 99.5769 53.4577 100.999C49.5872 100.49 45.8328 99.5917 42.2308 98.3447C46.5945 92.5335 53.3797 88.8 61 88.8ZM61.4694 70.0308C76.1807 70.0308 89.1303 77.7093 96.6615 89.3442C94.0411 91.2565 91.2642 92.9593 88.3545 94.4308C82.5252 85.6547 72.659 79.8864 61.4694 79.8864C50.2797 79.8864 40.4135 85.6547 34.5839 94.4297C31.6745 92.9593 28.8977 91.2565 26.2769 89.346C33.8085 77.7093 46.758 70.0308 61.4694 70.0308ZM68.3053 -21C71.7316 -20.6112 75.0716 -19.9336 78.3008 -18.9919C73.7705 -11.2947 71.1694 -2.30354 71.1694 7.30191C71.1694 34.753 92.4138 57.1868 119.185 58.7094C118.137 62.008 116.817 65.1855 115.255 68.2146C108.053 67.3969 101.233 65.3038 95.0204 62.1635C100.812 66.0621 105.903 70.9414 110.06 76.5669C108.126 79.1874 105.988 81.6446 103.672 83.9165L103.474 84.1077C94.2955 70.5956 78.9063 61.7341 61.4703 61.7341C44.0343 61.7341 28.6451 70.5956 19.4671 84.1077L19.269 83.9165C16.9525 81.6446 14.8149 79.1873 12.8794 76.5682C17.0378 70.9411 22.1282 66.0617 27.9198 62.1629C21.7078 65.3036 14.8876 67.3969 7.68574 68.2141C6.12308 65.1855 4.80395 62.008 3.75385 58.7085C30.5268 57.1868 51.7712 34.753 51.7712 7.30191C51.7712 -2.30354 49.17 -11.2947 44.6412 -18.9906C47.869 -19.9336 51.2089 -20.6112 54.6353 -21C58.8573 -12.8143 61.3045 -3.54442 61.4622 6.28825L61.4703 7.30191C61.4703 -2.85419 63.9129 -12.4334 68.2365 -20.8678L68.3053 -21ZM61.469 7.15385C61.469 28.6931 50.8454 47.6655 34.7231 58.7692C42.773 54.6053 51.8566 52.2628 61.469 52.2628C71.0815 52.2628 80.165 54.6053 88.2154 58.7686C72.0926 47.6655 61.469 28.6931 61.469 7.15385ZM42.2308 6.81137C42.2308 30.0548 23.7605 48.9484 0.811658 49.3846C0.277397 46.1223 0 42.7732 0 39.3589L0.00194164 39.6035L0.53782 39.5992C18.2515 39.3096 32.5225 24.7409 32.5225 6.81137C32.5225 0.0215206 30.4759 -6.28635 26.9707 -11.5193C29.6585 -13.3346 32.4995 -14.9384 35.4691 -16.3077C39.7473 -9.64979 42.2308 -1.71164 42.2308 6.81137ZM86.5312 -16.3077C89.501 -14.9384 92.3421 -13.3346 95.0313 -11.5198C91.5246 -6.28631 89.4779 0.0215931 89.4779 6.81148C89.4779 24.9216 104.038 39.6028 122 39.6039C121.989 42.9338 121.712 46.2006 121.191 49.3846C98.2404 48.9487 79.7692 30.055 79.7692 6.81148C79.7692 -1.65461 82.2197 -9.54363 86.4446 -16.1739L86.5312 -16.3077ZM25.3385 7.18978C25.3385 20.4723 14.4631 31.273 0.938462 31.5538C1.40063 28.1233 2.15587 24.7834 3.17789 21.5582C10.115 20.2857 15.3623 14.3365 15.3623 7.18978C15.3623 5.14297 14.9319 3.1944 14.1547 1.42575C16.3485 -1.23775 18.7674 -3.71699 21.3828 -5.98462C23.8864 -2.18579 25.3385 2.3363 25.3385 7.18978ZM100.617 -5.98462C103.232 -3.71694 105.651 -1.23765 107.845 1.4258C107.068 3.19459 106.637 5.1432 106.637 7.19005C106.637 14.3369 111.884 20.2862 118.82 21.5601C119.843 24.7841 120.598 28.124 121.062 31.5538C107.536 31.2737 96.6615 20.4729 96.6615 7.19005C96.6615 2.34471 98.1086 -2.17036 100.603 -5.965L100.617 -5.98462Z" />
        </symbol>
    </svg>


    <!-- Spinning -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 110 80" id="spinning">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.7288 57.1356H79.661V33.8347L79.6557 33.1925C79.3039 12.0409 61.6083 -5 39.8305 -5C18.0527 -5 0.357071 12.0409 0.00533615 33.1925L0 33.8347V57.1356H15.9322V33.8891L15.9362 33.4111L15.9449 33.0641C16.3595 20.5412 26.9105 10.5339 39.8305 10.5339L40.2213 10.537C52.9626 10.7363 63.3057 20.6677 63.7161 33.0641L63.7246 33.4111L63.7288 33.913V57.1356ZM46.2034 26.8644H30.2712V50.1653L30.2765 50.8075C30.6282 71.9591 48.3239 89 70.1017 89C91.8795 89 109.575 71.9591 109.927 50.8075L109.932 50.1653V26.8644H94V50.1109L93.996 50.5889L93.9873 50.9359C93.5726 63.4588 83.0217 73.4661 70.1017 73.4661L69.7109 73.463C56.9695 73.2637 46.6265 63.3323 46.2161 50.9359L46.2076 50.5889L46.2034 50.087V26.8644Z" />
        </symbol>
    </svg>



    <!-- Strengthening -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 101 80" id="strengthening">
        <path d="M50.5 -18L101 21.8433L90.4643 30.9005L101 39.212L90.4652 48.269L101 56.5808L50.5 100L0 56.5808L10.5339 48.269L0 39.212L10.5349 30.9005L0 21.8433L50.5 -18ZM85.2364 52.7642L50.5 82.6313L15.7618 52.7642L10.6407 56.8055L50.4992 91.0756L90.3583 56.8049L85.2364 52.7642ZM26.2967 44.4519L21.1741 48.4934L50.4994 73.7071L79.8241 48.4934L74.7025 44.4529L50.5 65.2626L26.2967 44.4519ZM50.4992 25.3577L31.709 40.1821L50.4989 56.3379L69.2892 40.1811L50.4992 25.3577ZM15.7627 35.3948L10.6402 39.4363L15.9463 43.9982L21.0679 39.9567L15.7627 35.3948ZM85.2364 35.3957L79.9303 39.9577L85.0519 43.9982L90.3585 39.4363L85.2364 35.3957ZM50.4994 7.98913L21.1751 31.125L26.4802 35.6869L50.5 16.7375L74.517 35.6869L79.8231 31.125L50.4994 7.98913ZM50.4996 -9.37939L10.6405 22.0678L15.9472 26.6298L50.5 -0.631271L85.051 26.6298L90.358 22.0671L50.4996 -9.37939Z" />
        </symbol>
    </svg>


    <!-- Swinging -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 106 80" id="swinging">
        <path d="M106 93H98.9333L98.9332 86.0313H95.3998L95.4 93H88.3333L88.3331 86.0313H84.7406L84.7411 93H77.7333L77.733 86.0313H74.1997L74.2 93H67.1333L67.133 86.0313L53 86.0314C23.7289 86.0314 0 62.5188 0 33.5146H7.06667C7.06667 58.6516 27.6317 79.0291 53 79.0291H106V93ZM17.6667 33.5146C17.6667 52.8507 33.4859 68.5258 53 68.5258H106V75.528H53C29.5831 75.528 10.6 56.718 10.6 33.5146H17.6667ZM28.2667 33.5146C28.2667 47.0499 39.3402 58.0224 53 58.0224H106V65.0247H53C35.4373 65.0247 21.2 50.9171 21.2 33.5146H28.2667ZM38.8667 33.5146C38.8667 41.249 45.1944 47.5191 53 47.5191H106V54.5213H53C41.2916 54.5213 31.8 45.1163 31.8 33.5146H38.8667ZM0 -12H7.06667L7.06586 -5.03225H10.5992L10.6 -12H17.6667L17.6659 -5.03225H21.2584L21.2588 -12H28.2667L28.266 -5.03225H31.7994L31.8 -12H38.8667L38.8661 -5.03225L53 -5.0314C82.2711 -5.0314 106 18.4812 106 47.4854H98.9333C98.9333 22.3484 78.3683 1.97085 53 1.97085H0V-12ZM53 5.47197C76.4169 5.47197 95.4 24.282 95.4 47.4854H88.3333C88.3333 28.1493 72.5141 12.4742 53 12.4742H0V5.47197H53ZM53 15.9753C70.5627 15.9753 84.8 30.0829 84.8 47.4854H77.7333C77.7333 33.9501 66.6598 22.9776 53 22.9776H0V15.9753H53ZM53 26.4787C64.7084 26.4787 74.2 35.8837 74.2 47.4854H67.1333C67.1333 39.751 60.8056 33.4809 53 33.4809H0V26.4787H53Z" />
        </symbol>
    </svg>


    <!-- Vaulting -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 130 80" id="vaulting">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M65 95L0 -14H17H27.1697H34H44.0421H85.9582H96H103.831H114H130L65 95ZM80.7596 -5.28H49.2405L65 21.1553L80.7596 -5.28ZM39.1985 -5.28L65 38L90.8015 -5.28H98.6094L65.5 50.0159L32.3909 -5.28H39.1985ZM15.3068 -5.28H22.2212L65.5 67L108.779 -5.28H114.693L65 78.0516L15.3068 -5.28Z" />
        </symbol>
    </svg>


    <!-- Techniques -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 25 26" id="syllabus-techniques">
        <path d="M10.5263 14.95V25.35H0V14.95H10.5263ZM11.8421 0L19.0789 11.7H4.60526L11.8421 0ZM19.0789 14.3C22.3684 14.3 25 16.9 25 20.15C25 23.4 22.3684 26 19.0789 26C15.7895 26 13.1579 23.4 13.1579 20.15C13.1579 16.9 15.7895 14.3 19.0789 14.3Z" />
        </symbol>
    </svg>


    <!-- Tutorials -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 25 24" id="syllabus-tutorials">
            <path d="M19.7368 16.1867C20.7837 16.1867 21.7878 16.5982 22.5281 17.3309C23.2683 18.0635 23.6842 19.0572 23.6842 20.0933C23.6842 21.1294 23.2683 22.1231 22.5281 22.8558C21.7878 23.5884 20.7837 24 19.7368 24C18.0132 24 16.5526 22.9192 16.0132 21.3956H14.4737V18.7911H16.0132C16.5526 17.2675 18.0132 16.1867 19.7368 16.1867ZM19.7368 18.7911C19.3879 18.7911 19.0532 18.9283 18.8064 19.1725C18.5597 19.4167 18.4211 19.748 18.4211 20.0933C18.4211 20.4387 18.5597 20.7699 18.8064 21.0141C19.0532 21.2584 19.3879 21.3956 19.7368 21.3956C20.0858 21.3956 20.4205 21.2584 20.6672 21.0141C20.914 20.7699 21.0526 20.4387 21.0526 20.0933C21.0526 19.748 20.914 19.4167 20.6672 19.1725C20.4205 18.9283 20.0858 18.7911 19.7368 18.7911ZM19.7368 7.07108C20.2359 7.07108 20.7145 6.87489 21.0673 6.52566C21.4202 6.17643 21.6184 5.70278 21.6184 5.2089C21.6184 4.18014 20.7763 3.34672 19.7368 3.34672C18.6974 3.34672 17.8553 4.18014 17.8553 5.2089C17.8553 5.70278 18.0535 6.17643 18.4064 6.52566C18.7592 6.87489 19.2378 7.07108 19.7368 7.07108ZM19.7368 0C21.1327 0 22.4714 0.548793 23.4585 1.52565C24.4455 2.50251 25 3.82741 25 5.2089C25 9.10255 19.7368 14.8844 19.7368 14.8844C19.7368 14.8844 14.4737 9.10255 14.4737 5.2089C14.4737 3.82741 15.0282 2.50251 16.0152 1.52565C17.0023 0.548793 18.341 0 19.7368 0ZM7.67105 18.7911H9.21053V21.3956H7.67105C7.13158 22.9192 5.67105 24 3.94737 24C2.90046 24 1.89643 23.5884 1.15616 22.8558C0.415882 22.1231 0 21.1294 0 20.0933C0 18.3874 1.09211 16.9419 2.63158 16.408V14.8844H5.26316V16.408C6.38158 16.7987 7.27632 17.6842 7.67105 18.7911ZM3.94737 18.7911C3.5984 18.7911 3.26372 18.9283 3.01696 19.1725C2.77021 19.4167 2.63158 19.748 2.63158 20.0933C2.63158 20.4387 2.77021 20.7699 3.01696 21.0141C3.26372 21.2584 3.5984 21.3956 3.94737 21.3956C4.29634 21.3956 4.63101 21.2584 4.87777 21.0141C5.12453 20.7699 5.26316 20.4387 5.26316 20.0933C5.26316 19.748 5.12453 19.4167 4.87777 19.1725C4.63101 18.9283 4.29634 18.7911 3.94737 18.7911ZM3.94737 0.559957C4.99428 0.559957 5.9983 0.971552 6.73858 1.7042C7.47886 2.43684 7.89474 3.43052 7.89474 4.46663C7.89474 6.17254 6.80263 7.61801 5.26316 8.15193V9.67553H2.63158V8.15193C1.09211 7.61801 0 6.17254 0 4.46663C0 3.43052 0.415882 2.43684 1.15616 1.7042C1.89643 0.971552 2.90046 0.559957 3.94737 0.559957ZM3.94737 3.16441C3.5984 3.16441 3.26372 3.3016 3.01696 3.54582C2.77021 3.79003 2.63158 4.12126 2.63158 4.46663C2.63158 4.812 2.77021 5.14323 3.01696 5.38744C3.26372 5.63166 3.5984 5.76886 3.94737 5.76886C4.29634 5.76886 4.63101 5.63166 4.87777 5.38744C5.12453 5.14323 5.26316 4.812 5.26316 4.46663C5.26316 4.12126 5.12453 3.79003 4.87777 3.54582C4.63101 3.3016 4.29634 3.16441 3.94737 3.16441ZM10.5263 21.3956V18.7911H13.1579V21.3956H10.5263ZM5.26316 13.5822H2.63158V10.9778H5.26316V13.5822Z" />
        </symbol>
    </svg>


    <!-- Demos -->
    <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
        <symbol viewBox="0 0 24 16" id="syllabus-demos">
        <path d="M18.6667 6V1.33333C18.6667 0.979711 18.5262 0.640573 18.2761 0.390525C18.0261 0.140476 17.687 0 17.3333 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390525C0.140476 0.640573 0 0.979711 0 1.33333V14.6667C0 15.0203 0.140476 15.3594 0.390524 15.6095C0.640573 15.8595 0.979711 16 1.33333 16H17.3333C17.687 16 18.0261 15.8595 18.2761 15.6095C18.5262 15.3594 18.6667 15.0203 18.6667 14.6667V10L24 15.3333V0.666667L18.6667 6Z" />
        </symbol>
    </svg>
`