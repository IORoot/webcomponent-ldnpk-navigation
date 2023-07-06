import './navbar.js';
import './navitem.js';
import '../button/button.js';
import '../menuClassCard/menuclasscard.js';
import '../menuStoreCard/menustorecard.js';

import { Classes } from './contents/classes.js'
import { Store } from './contents/store.js'
import { Tutorials } from './contents/tutorials.js'
import { News } from './contents/news.js'
import { Support } from './contents/support.js'

export default {
	title: 'LondonParkour/navigation',
	component: 'ldnpk-navbar',
	tags: ['autodocs'],

	// Docs Page Description
	parameters: {
		layout: 'fullscreen',

		docs: {
			description: {
				component:
					'The LondonParkour NavBar Component.',
			},
		},
	},

	// ╭─────────────────────────────────────────────────────╮
	// │                 ARGUMENTS (CONTROLS)                │
	// ╰─────────────────────────────────────────────────────╯
	argTypes: {

		// ╭─────────────────────────────────────────────────────╮
		// │                 CUSTOM CSS VARIABLES                │
		// ╰─────────────────────────────────────────────────────╯

	},


	// ╭─────────────────────────────────────────────────────╮
	// │                   ARGUMENT DEFAULTS                 │
	// ╰─────────────────────────────────────────────────────╯
	args: {

	},

};


// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                      Hover Style                      │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Content = ({ }) => {

	let htmlString =
/* html */`
	<style>
	ldnpk-navbar {
		#classes    { --contentsBackground: var(--color-blue-500) ; }
		#store      { --contentsBackground: var(--color-amber-400); }
		#tutorials  { --contentsBackground: var(--color-green-500); }
		#news  		{ --contentsBackground: var(--color-purple-600); }
		#support  	{ --contentsBackground: var(--color-orange-500); }

		#classes svg#prefixicon    { fill: var(--color-blue-400); }
		#store svg#prefixicon      { fill: var(--color-amber-400); }
		#tutorials svg#prefixicon  { fill: var(--color-green-500); }
		#news svg#prefixicon  		{ fill: var(--color-purple-600); }
		#support svg#prefixicon  	{ fill: var(--color-orange-500); }
	} 


	</style>
	
	<ldnpk-navbar class="h-24

		gap-0 md:gap-8">

		<div class="w-40 bg-gray-700 hidden md:flex">
			<span class="m-auto">LOGO</span>
		</div>



		<ldnpk-navitem id="classes" class="h-full grow md:grow-0">
			<!-- Menu Item  -->
			<div slot="menu" class="
				flex
				flex-col 				md:flex-row
				gap-1 					md:gap-2
				h-24
				justify-items-center
				items-center
				">
				<!-- SVG  -->
				<svg id="prefixicon" class="mt-auto md:m-auto" role="img" 
					aria-label="classes" 
					style="width:2rem; height:2rem; " >
					<use xlink:href="#glyph-classes"></use>
				</svg>
				<!-- Menu Title  -->
				<div id="menutitle" class="
					text-xs				md:text-base
										md:font-normal
					mb-auto 			md:m-auto">
					Classes</div>
			</div>

			<!-- Menu Content  -->
			<div slot="content">

				<!-- Import Classes.js -->
				`+ Classes + /* html */`

			</div>
		</ldnpk-navitem>



		<ldnpk-navitem id="store" class="h-full grow md:grow-0">
			<!-- Menu Item  -->
			<div slot="menu" class="flex
				flex-col 				md:flex-row
				gap-1 					md:gap-2
				h-24
				justify-items-center
				items-center">
				<!-- SVG  -->
				<svg id="prefixicon" class="mt-auto md:m-auto" role="img" 
					aria-label="store" 
					style="width:2rem;  height:2rem;">
				<use xlink:href="#glyph-store"></use>
				</svg>
				<!-- Menu Title  -->
				<div  id="menutitle" class="
					text-xs				md:text-base
					font-thin			md:font-normal
					mb-auto 			md:m-auto">
					Store</div>
			</div>

			<!-- Menu Content  -->
			<div slot="content">
				<!-- Import Store.js -->
				`+ Store + /* html */`
			</div>
		</ldnpk-navitem>



		<ldnpk-navitem id="tutorials" class="h-full grow md:grow-0">
			<!-- Menu Item  -->
			<div slot="menu" class="flex
				flex-col 				md:flex-row
				gap-1 					md:gap-2
				h-24
				justify-items-center
				items-center">
				<!-- SVG  -->
				<svg id="prefixicon" class="mt-auto md:m-auto" role="img" 
					aria-label="tutorials" 
					style="width:2rem;  height:2rem;">
				<use xlink:href="#glyph-tutorials"></use>
				</svg>
				<!-- Menu Title  -->
				<div id="menutitle" class="
					text-xs				md:text-base
					font-thin			md:font-normal
					mb-auto 			md:m-auto">
					Tutorials</div>
			</div>

			<!-- Menu Content  -->
			<div slot="content">
				<!-- Import Tutorials.js -->
				`+ Tutorials + /* html */`
			</div>
		</ldnpk-navitem>



		<ldnpk-navitem id="news" class="h-full grow md:grow-0">
			<!-- Menu Item  -->
			<div slot="menu" class="flex
				flex-col 				md:flex-row
				gap-1 					md:gap-2
				h-24
				justify-items-center
				items-center">
				<!-- SVG  -->
				<svg id="prefixicon" class="mt-auto md:m-auto" role="img" 
					aria-label="news" 
					style="width:2rem; height:2rem;">
				<use xlink:href="#glyph-news"></use>
				</svg>
				<!-- Menu Title  -->
				<div id="menutitle" class="
					text-xs				md:text-base
					font-thin			md:font-normal
					mb-auto 			md:m-auto">
					News</div>
			</div>

			<!-- Menu Content  -->
			<div slot="content">
				<!-- Import news.js -->
				`+ News + /* html */`
			</div>
		</ldnpk-navitem>



		<ldnpk-navitem id="support" class="h-full grow md:grow-0">
			<!-- Menu Item  -->
			<div slot="menu" class="flex
				flex-col 				md:flex-row
				gap-1 					md:gap-2
				h-24
				justify-items-center
				items-center">
				<!-- SVG  -->
				<svg id="prefixicon" class="mt-auto md:m-auto" role="img" 
					aria-label="support" 
					style="width:2rem; height:2rem;">
				<use xlink:href="#glyph-support"></use>
				</svg>
				<!-- Menu Title  -->
				<div id="menutitle" class="
					text-xs				md:text-base
					font-thin			md:font-normal
					mb-auto 			md:m-auto">
					Support</div>
			</div>

			<!-- Menu Content  -->
			<div slot="content">
				<!-- Import Tutorials.js -->
				`+ Support + /* html */`
			</div>
		</ldnpk-navitem>


		<div class="w-40 bg-emerald-500 hidden md:flex ml-auto">
			<span class="m-auto">SEARCH</span>
		</div>

	</ldnpk-navbar>
`


	htmlString += /* css */`
	<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
		<symbol id="glyph-classes" viewBox="0 0 32 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<path d="M16 0L17.7778 1.83333L8.88889 11L17.7778 20.1667L16 22L5.33333 11L16 0ZM10.6667 0L12.4444 1.83333L3.55556 11L12.4444 20.1667L10.6667 22L0 11L10.6667 0ZM19.5556 3.66667L26.6667 11L19.5556 18.3333L17.7778 16.5L23.1111 11L17.7778 5.5L19.5556 3.66667ZM24.8889 3.66667L32 11L24.8889 18.3333L23.1111 16.5L28.4444 11L23.1111 5.5L24.8889 3.66667Z" />
		</symbol>
	</svg>

	<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
		<symbol id="glyph-store" viewBox="0 0 21 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<path d="M14.995 11.8491H11.996V7.47775L11.9952 7.38327L11.9936 7.31797C11.9164 4.98452 9.96944 3.11509 7.57107 3.07756L7.49751 3.07698C5.0655 3.07698 3.07944 4.96071 3.00139 7.31797L2.99975 7.38327L2.999 7.47326V11.8491H0V7.46302L0.00100445 7.34214C0.0672134 3.36065 3.39816 0.152954 7.49751 0.152954C11.5969 0.152954 14.9278 3.36065 14.994 7.34214L14.995 7.46302V11.8491Z" />
	<path d="M5.6981 6.15096H8.6971V10.5223L8.69789 10.6168L8.69949 10.6821C8.77676 13.0155 10.7237 14.8849 13.122 14.9225L13.1956 14.923C15.6276 14.923 17.6137 13.0393 17.6917 10.6821L17.6934 10.6168L17.6941 10.5268V6.15096H20.6931V10.537L20.6921 10.6579C20.6259 14.6394 17.295 17.8471 13.1956 17.8471C9.09626 17.8471 5.76531 14.6394 5.69911 10.6579L5.6981 10.537V6.15096Z" />
		</symbol>
	</svg>

	<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
		<symbol id="glyph-tutorials" viewBox="0 0 21 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<path d="M10.5339 0.519043L20.3746 8.27225L18.3215 10.0347L20.3746 11.6521L18.3217 13.4145L20.3746 15.0319L10.5339 23.4809L0.693115 15.0319L2.74582 13.4145L0.693115 11.6521L2.74601 10.0347L0.693115 8.27225L10.5339 0.519043ZM17.3028 14.2892L10.5339 20.1011L3.76455 14.2892L2.76663 15.0756L10.5337 21.7443L18.3009 15.0755L17.3028 14.2892ZM5.81744 12.6717L4.81923 13.4581L10.5337 18.3645L16.2481 13.4581L15.2501 12.6719L10.5339 16.7213L5.81744 12.6717ZM10.5337 8.95611L6.87213 11.8408L10.5336 14.9846L14.1952 11.8406L10.5337 8.95611ZM3.76474 10.9093L2.76654 11.6957L3.8005 12.5834L4.79853 11.797L3.76474 10.9093ZM17.3028 10.9094L16.2688 11.7972L17.2669 12.5834L18.3009 11.6957L17.3028 10.9094ZM10.5337 5.57633L4.81942 10.0784L5.85321 10.9661L10.5339 7.27869L15.214 10.9661L16.2479 10.0784L10.5337 5.57633ZM10.5338 2.19655L2.76658 8.31593L3.80069 9.20366L10.5339 3.89886L17.2667 9.20366L18.3008 8.3158L10.5338 2.19655Z"/>
		</symbol>
	</svg>

	<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
		<symbol id="glyph-news" viewBox="0 0 25 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<path d="M24.0923 0.352936V11.6471H20.3275V0.352936H24.0923ZM18.4452 0.352936V11.6471H15.4334V0.352936H18.4452ZM13.5511 0.352936V11.6471H11.6687V0.352936H13.5511ZM9.78637 0.352936V11.6471H8.28049V0.352936H9.78637ZM6.39813 0.352936V11.6471H5.26872V0.352936H6.39813ZM3.38637 0.352936V11.6471H2.63343V0.352936H3.38637ZM0.751074 0.352936V11.6471H0.374603V0.352936H0.751074Z" />
		</symbol>
	</svg>


	<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
		<symbol id="glyph-support" viewBox="0 0 25 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<path d="M12.0584 0.236603L24.0245 7.11712V20.8829L12.0584 27.7634L0.0922852 20.8829V7.11712L12.0584 0.236603ZM12.0584 1.78674L1.43629 7.89441V20.1054L12.0582 26.2131L22.6805 20.1052V7.8946L12.0584 1.78674ZM12.0584 4.0025L20.6363 8.90415V18.7194L12.0584 23.621L3.48052 18.7194V8.90415L12.0584 4.0025ZM12.0584 5.55031L4.82452 9.68396V17.9394L12.0584 22.073L19.2923 17.9392V9.68415L12.0584 5.55031ZM12.0584 7.95495L17.2481 10.9282V16.8836L12.0584 19.8568L6.86876 16.8836V10.9282L12.0584 7.95495ZM12.0584 9.50382L8.21276 11.7069V16.1047L12.0584 18.3078L15.904 16.1045V11.7071L12.0584 9.50382ZM12.0584 10.6118L12.7422 13.4995L14.8297 15.5529L12.0584 14.7187L9.28712 15.5529L11.3746 13.4995L12.0584 10.6118Z" />
		</symbol>
	</svg>
`


	return htmlString;
};
