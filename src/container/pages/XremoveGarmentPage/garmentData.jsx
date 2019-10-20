// Creating a two dimensional array of regular apparel and show apparel
// I'll use destructuring to access the individual arrays.

export const garments=[
	'All',
	'Cooling Coats',
	'Diapers',
	'Belly Bands',
	'Splash Pants',
	'Bibs',
	'Snoods',
	'Rain Coats',
	'Winter Coats',
	'Warming Coats',
	'Hats',
	'Body Socks',
	'Pyjamas',
	'Pee Wraps'
]


export const products = [
	
		{
			id: 1,
			url: 'http://www.teasewearproducts.com/images/raincoat/raincoatw1.jpg',
			dir: '/garment/regular/raincoats',
			caption: 'Rain Coats',
			desc:
				'No more wet dog smell!  Waterproof outer layer and a light soft inner layer to keep pets dry. Splash pants are also highly recommended with this item.',
			price:60.00
		},
		{
			id: 2,
			url: 'http://www.teasewearproducts.com/images/cooling/coolingw2.jpg',
			dir: '/garment/regular/coolingcoats',
			caption: 'Cooling Coats',
			desc:
				"Who needs ice-cream when there's a cooling coat! The inner layer of the coat absorbs and holds water to keep the body cool and comfortable while the outer layer prevents water from wetting floors and furniture. Keeps pet cool and comfortable in summer heat. The inner layer keeps the coat dry. The outer layer can be flamboyant or subtle.",
				price:80.00
		},

		{
			id: 3,
			url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw1.jpg',
			dir: '/garment/regular/wintercoats',
			caption: 'Winter Coats',
			desc:
				'Recommended for dogs breeds that do not have an undercoat, as well as seniors dogs of all breeds. Keeps pet warm and dry and has an insulating core.',
				price:80.00
		},
		{
			id: 4,
			url: 'http://www.teasewearproducts.com/images/splash/splashw1.jpg',
			dir: '/garment/regular/splashpants',
			caption: 'Splash Pants',
			desc:
				'An all-season pant to keep home and vehicles clean and dry.  Keep legs and belly free of rain, snow, dirt, grasses and twigs.',
				price:120.00
		},
		{
			id: 5,
			url: 'http://www.teasewearproducts.com/images/diapers/diaperw1.jpg',
			dir: '/garment/regular/diapers',
			caption: 'Diapers',
			desc:
				'These diapers are designed to accommodate standard female panty liners for quick, economical changes and peace of mind. Use for incontinence, marking indoors, female dogs in heat, post surgery and peace of mind during long periods of travel. The outer layer is a washable, breathable fabric and an inner flannel or cotton layer for comfort.',
				price:0.00
		},
		{
			id: 6,
			url: 'http://www.teasewearproducts.com/images/bellyband/bellybandw2.jpg',
			dir: '/garment/regular/bellybands',
			caption: 'Belly Bands',
			desc:
				'Specially designed belly bands which accommodate male dogs. Use for incontinence, marking indoors, post surgery and peace of mind during long periods of travel. The outer layer is a washable, breathable fabric and an inner flannel or cotton layer for comfort.',
				price:0.00
		},
		{
			id: 7,
			url: 'http://www.teasewearproducts.com/images/hats/hatw1.jpg',
			dir: '/garment/regular/hats',
			caption: 'Assorted Hats',
			desc: 'Specially designed Hats for the decerning dog owner',
			price:0.00
		},
	
		{
			id: 8,
			url: 'http://www.teasewearproducts.com/images/bibs/bibsw1.jpg',
			dir: '/garment/show/bibs',
			caption: 'Bibs',
			desc: 'For the sloopy pooch! Created from soft absorbant terry cloth to capture drool and drippings',
			price:0.00
		},
		{
			id: 9,
			url: 'http://www.teasewearproducts.com/images/bodysock/bodysockw1.jpg',
			dir: '/garment/show/bodysocks',
			caption: 'Body Socks',
			desc:
				'Used to keep the coat smooth and from curling. Made out of four way stretch material that fits the body snuggly from neck to tail.',
			price:70.00
		},

		{
			id: 10,
			url: 'http://www.teasewearproducts.com/images/pjs/pj1.jpg',
			dir: '/garment/show/pyjamas',
			caption: "P J's",
			desc:
				'This product was created with senior dogs in mind, as well as those with no undercoat or hairless. These PJs are warm and cozy, giving a nice snuggle feeling. Warning: dogs may want to sleep in longer.',
			price:80.00
		},

		{
			id: 11,
			url: 'http://www.teasewearproducts.com/images/peewraps/peewrapw1.jpg',
			dir:'/garment/show/peewraps',
			caption: 'Pee Wraps',
			desc: 'Covering from neck to belly to keep urine from discoloring furnishings',
			price:70.00
		},

		{
			id: 12,
			url: 'http://www.teasewearproducts.com/images/snood/snoodw2.jpg',
			dir: '/garment/regular/snood',
			caption: 'Snoods',
			desc:
				'Covering the head from crown to neck to keep the ears clean and dry when eating or drinking. Also recommended for all seasons to protect ears and neck during cold winter walks; retaining warmth to the exposed head and neck areas.  The Snood is available in cotton, sheer or complimentary to Winter Coat or Splash Pant fabrics.	',
				price:25.00
		},

		{
			id: 13,
			url: 'http://www.teasewearproducts.com/images/warmingcoat/warmingcoatw1.jpg',
			dir: '/garment/regular/warmingcoats',
			caption: 'Warming Coats',
			desc:
				'After bathing, used to retain moisture, warmth and prevent fur from curling and drying until the grooming is completed.',
			price:60.00
		}
	
]

export const cooling = [
	{
		id: 14,
		dir: '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw1.jpg',
		caption: 'Cooling 1',
		Description:'Cooling Coat 1',
		price:95.00,
	},
	{
		id: 15,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw2.jpg',
		caption: 'Cooling 2',
		Description:'Cooling Coat 2',
		price:95.00,
	},
	{
		id: 16,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw3.jpg',
		caption: 'Cooling 3',
		Description:'',
		price:95.00,
	},
	{
		id: 17,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw4.jpg',
		caption: 'Cooling 4',
		Description:'',
		price:95.00,
	},
	{
		id: 18,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw5.jpg',
		caption: 'Cooling 5',
		Description:'',
		price:95.00,
	},
	{
		id: 19,
		dir: '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw6.jpg',
		caption: 'Cooling 6',
		Description:'',
		price:95.00,
	},
	{
		id: 20,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw7.jpg',
		caption: 'cooling 7',
		Description:'',
		price:95.00,
	},
	{
		id: 21,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw8.jpg',
		caption: 'cooling 8'
	},
	{
		id: 22,
		dir: '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw9.jpg',
		caption: 'cooling 9',
		Description:'',
		price:95.00,
	},
	{
		id: 23,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw10.jpg',
		caption: 'cooling 10',
		Description:'',
		price:95.00,
	},
	{
		id: 24,
		dir: '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw11.jpg',
		caption: 'Cooling 11',
		Description:'',
		price:95.00,
	},
	{
		id: 25,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw12.jpg',
		caption: 'Cooling 12',
		Description:'',
		price:95.00,
	},
	{
		id: 26,
		dir:  '/garment/regular/coolingcoats',
		url: 'http://www.teasewearproducts.com/images/cooling/coolingw13.jpg',
		caption: 'Cooling 13',
		Description:'',
		price:95.00,
	}
];

export const diapers = [
	{
		id: 27,
		url: 'http://www.teasewearproducts.com/images/diapers/diaperw1.jpg',
		dir: '/garment/regular/diapers',
		caption: 'Diaper 1'
	},
	{
		id: 28,
		url: 'http://www.teasewearproducts.com/images/diapers/diaperw2.jpg',
		dir: '/garment/regular/diapers',
		caption: 'Diaper 2'
	},
	{
		id: 29,
		url: 'http://www.teasewearproducts.com/images/diapers/diaperw3.jpg',
		dir: '/garment/regular/diapers',
		caption: 'Diaper 3'
	},
	{
		id: 30,
		url: 'http://www.teasewearproducts.com/images/diapers/diaperw4.jpg',
		dir: '/garment/regular/diapers',
		caption: 'Diaper 4'
	}
];

export const bellybands = [
	{
		id: 31,
		url: 'http://www.teasewearproducts.com/images/bellyband/bellybandw1.jpg',
		dir: '/garment/regular/bellybands',
		caption: 'BellyBand 1'
	},
	{
		id: 32,
		url: 'http://www.teasewearproducts.com/images/bellyband/bellybandw2.jpg',
		dir: '/garment/regular/bellybands',
		caption: 'BellyBand 2'
	}
];

export const splashpants = [
	{
		id: 33,
		url: 'http://www.teasewearproducts.com/images/splash/splashw1.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 1'
	},
	{
		id: 34,
		url: 'http://www.teasewearproducts.com/images/splash/splashw2.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 2'
	},
	{
		id: 35,
		url: 'http://www.teasewearproducts.com/images/splash/splashw3.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 3'
	},
	{
		id: 36,
		url: 'http://www.teasewearproducts.com/images/splash/splashw4.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 4'
	},
	
	{
		id: 37,
		url: 'http://www.teasewearproducts.com/images/splash/splashw7.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 5'
	},
	{
		id: 38,
		url: 'http://www.teasewearproducts.com/images/splash/splashw6.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 6'
	},
	{
		id: 39,
		url: 'http://www.teasewearproducts.com/images/splash/splashw8.jpg',
		dir: '/garment/regular/splashpants',
		caption: 'Splash Pants 7'
	}
];

export const snoods = [
	{
		id: 40,
		url: 'http://www.teasewearproducts.com/images/snood/snoodw1.jpg',
		dir: '/garment/show/snoods',
		caption: 'Snood 1'
	},
	{
		id: 41,
		url: 'http://www.teasewearproducts.com/images/snood/snoodw2.jpg',
		dir: '/garment/show/snoods',
		caption: 'Snoods 2'
	},
	{
		id: 42,
		url: 'http://www.teasewearproducts.com/images/snood/snoodw3.jpg',
		dir: '/garment/show/snoods',
		caption: 'Snoods 3'
	}
];

export const bibs = [
	{
		id: 43,
		url: 'http://www.teasewearproducts.com/images/bibs/bibsw1.jpg',
		dir: '/garment/show/bibs',
		caption: 'Bibs'
	}
];

export const wintercoats = [
	{
		id: 44,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw1.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 1'
	},
	{
		id: 45,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw2.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 2'
	},
	{
		id: 46,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw3.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 3'
	},
	{
		id: 47,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw4.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 4'
	},
	{
		id: 48,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw5.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 5'
	},
	{
		id: 49,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw6.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 6'
	},
	{
		id: 50,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw8.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 7'
	},
	{
		id: 51,
		url: 'http://www.teasewearproducts.com/images/wintercoat/wintercoatw9.jpg',
		dir: '/garment/show/wintercoats',
		caption: 'Winter Coat 8'
	}
];

export const hats = [
	{
		id: 52,
		url: 'http://www.teasewearproducts.com/images/hats/hatw1.jpg',
		dir: "/garment/regular/hats",
		caption: 'Hats 1'
	},
	{
		id: 53,
		url: 'http://www.teasewearproducts.com/images/hats/hatw2.jpg',
		dir: "/garment/regular/hats",
		caption: 'Hats 2'
	},
	{
		id: 54,
		url: 'http://www.teasewearproducts.com/images/hats/hatw3.jpg',
		dir: "/garment/regular/hats",
		caption: 'Hats 3'
	},
	{
		id: 55,
		url: 'http://www.teasewearproducts.com/images/hats/hatw4.jpg',
		dir: "/garment/regular/hats",
		caption: 'Hats 4'
	}
];

export const bodysocks = [
	{
		id: 56,
		url: 'http://www.teasewearproducts.com/images/bodysock/bodysockw1.jpg',
		dir: '/garment/show/bodysocks',
		caption: 'Body Socks 1'
	},
	{
		id: 57,
		url: 'http://www.teasewearproducts.com/images/bodysock/bodysockw2.jpg',
		dir: '/garment/show/bodysocks',
		caption: 'Body Socks 2'
	}
];

export const warmingcoats = [
	{
		id: 58,
		url: 'http://www.teasewearproducts.com/images/warmingcoat/warmingcoatw1.jpg',
		dir: '/garment/show/warmingcoats',
		caption: 'Warming Coat 1'
	}
];

export const raincoats = [
	{
		id: 59,
		url: 'http://www.teasewearproducts.com/images/raincoat/raincoatw1.jpg',
		dir: '/garment/regular/raincoats',
		caption: 'Rain Coat 1'
	},
	{
		id: 60,
		url: 'http://www.teasewearproducts.com/images/raincoat/raincoatw2.jpg',
		dir: '/garment/regular/raincoats',
		caption: 'Rain Coat 2'
	},
	{
		id: 61,
		url: 'http://www.teasewearproducts.com/images/raincoat/raincoatw3.jpg',
		dir: '/garment/regular/raincoats',
		caption: 'Rain Coat 3'
	},
	{
		id: 62,
		url: 'http://www.teasewearproducts.com/images/raincoat/raincoatw4.jpg',
		dir: '/garment/regular/raincoats',
		caption: 'Rain Coat 4'
	}
];

// Need photos for these items

export const pyjamas = [
	{
		id: 63,
		url: 'http://www.teasewearproducts.com/images/pjs/pj1.jpg',
		dir: '/garment/show/pyjamas',
		caption: "P J"
	
	},
	
	{
		id: 64,
		url: 'http://www.teasewearproducts.com/images/pjs/pj2.jpg',
		dir: '/garment/show/pyjamas',
		caption: "P J"
	},
];

export const peewraps = [
	{
		id: 65,
		url: 'http://www.teasewearproducts.com/images/peewraps/peewrapw1.jpg',
		dir: '/garment/show/peewraps',
		caption: 'Pee Wraps',
		
	},
];
