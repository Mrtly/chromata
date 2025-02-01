export interface Color {
	name: { value: string }
	rgb: { value: string }
	hex: { value: string }
}

export interface State {
	allColors: Color[]
	uniqueColors: Color[]
	currentHsl: string
	loading: boolean
}

export interface HSQueries {
	s: number
	l: number
}

export function getCopyablePaletteObject(colors: Color[]): {
	name: string
	hex: string
}[] {
	return colors.map((color) => ({
		name: color.name.value,
		hex: color.hex.value,
	}))
}

//dummy
export const uniqueColors = [
	{
		hex: {
			value: '#990000',
			clean: '990000',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0,
			},
			r: 153,
			g: 0,
			b: 0,
			value: 'rgb(153, 0, 0)',
		},
		hsl: {
			fraction: {
				h: 0,
				s: 1,
				l: 0.3,
			},
			h: 0,
			s: 100,
			l: 30,
			value: 'hsl(0, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(0, 100%, 60%)',
			h: 0,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Red Berry',
			closest_named_hex: '#8E0000',
			exact_match_name: false,
			distance: 171,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 100, 40)',
			c: 0,
			m: 100,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.24744,
				Y: 0.12756,
				Z: 0.01158,
			},
			value: 'XYZ(25, 13, 1)',
			X: 25,
			Y: 13,
			Z: 1,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=990000',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=990000',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=990000',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#992400',
			clean: '992400',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0.1411764705882353,
				b: 0,
			},
			r: 153,
			g: 36,
			b: 0,
			value: 'rgb(153, 36, 0)',
		},
		hsl: {
			fraction: {
				h: 0.039215686274509776,
				s: 1,
				l: 0.3,
			},
			h: 14,
			s: 100,
			l: 30,
			value: 'hsl(14, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.039215686274509776,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(14, 100%, 60%)',
			h: 14,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Totem Pole',
			closest_named_hex: '#991B07',
			exact_match_name: false,
			distance: 1270,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 0.7647058823529412,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(0, 76, 100, 40)',
			c: 0,
			m: 76,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2979247058823529,
				Y: 0.22852941176470587,
				Z: 0.028408235294117647,
			},
			value: 'XYZ(30, 23, 3)',
			X: 30,
			Y: 23,
			Z: 3,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=992400',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=992400',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=992400',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#993600',
			clean: '993600',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0.21176470588235294,
				b: 0,
			},
			r: 153,
			g: 54,
			b: 0,
			value: 'rgb(153, 54, 0)',
		},
		hsl: {
			fraction: {
				h: 0.05882352941176472,
				s: 1,
				l: 0.3,
			},
			h: 21,
			s: 100,
			l: 30,
			value: 'hsl(21, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.05882352941176472,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(21, 100%, 60%)',
			h: 21,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Brown',
			closest_named_hex: '#964B00',
			exact_match_name: false,
			distance: 524,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 0.6470588235294117,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(0, 65, 100, 40)',
			c: 0,
			m: 65,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.3231670588235294,
				Y: 0.27901411764705886,
				Z: 0.03682235294117647,
			},
			value: 'XYZ(32, 28, 4)',
			X: 32,
			Y: 28,
			Z: 4,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=993600',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=993600',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=993600',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#995900',
			clean: '995900',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0.34901960784313724,
				b: 0,
			},
			r: 153,
			g: 89,
			b: 0,
			value: 'rgb(153, 89, 0)',
		},
		hsl: {
			fraction: {
				h: 0.09694989106753804,
				s: 1,
				l: 0.3,
			},
			h: 35,
			s: 100,
			l: 30,
			value: 'hsl(35, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.09694989106753804,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(35, 100%, 60%)',
			h: 35,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Chelsea Gem',
			closest_named_hex: '#9E5302',
			exact_match_name: false,
			distance: 203,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 0.41830065359477125,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(0, 42, 100, 40)',
			c: 0,
			m: 42,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.37224941176470583,
				Y: 0.37717882352941173,
				Z: 0.05318313725490196,
			},
			value: 'XYZ(37, 38, 5)',
			X: 37,
			Y: 38,
			Z: 5,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=995900',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=995900',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=995900',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#997D00',
			clean: '997D00',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0.49019607843137253,
				b: 0,
			},
			r: 153,
			g: 125,
			b: 0,
			value: 'rgb(153, 125, 0)',
		},
		hsl: {
			fraction: {
				h: 0.13616557734204793,
				s: 1,
				l: 0.3,
			},
			h: 49,
			s: 100,
			l: 30,
			value: 'hsl(49, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.13616557734204793,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(49, 100%, 60%)',
			h: 49,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Olive',
			closest_named_hex: '#808000',
			exact_match_name: false,
			distance: 1050,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 0.18300653594771232,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(0, 18, 100, 40)',
			c: 0,
			m: 18,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.4227341176470588,
				Y: 0.4781482352941176,
				Z: 0.0700113725490196,
			},
			value: 'XYZ(42, 48, 7)',
			X: 42,
			Y: 48,
			Z: 7,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=997D00',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=997D00',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=997D00',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#7F9900',
			clean: '7F9900',
		},
		rgb: {
			fraction: {
				r: 0.4980392156862745,
				g: 0.6,
				b: 0,
			},
			r: 127,
			g: 153,
			b: 0,
			value: 'rgb(127, 153, 0)',
		},
		hsl: {
			fraction: {
				h: 0.19498910675381265,
				s: 1,
				l: 0.3,
			},
			h: 70,
			s: 100,
			l: 30,
			value: 'hsl(70, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.19498910675381265,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(70, 100%, 60%)',
			h: 70,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Limeade',
			closest_named_hex: '#6F9D02',
			exact_match_name: false,
			distance: 464,
		},
		cmyk: {
			fraction: {
				c: 0.16993464052287577,
				m: 0,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(17, 0, 100, 40)',
			c: 17,
			m: 0,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.4199513725490196,
				Y: 0.5350031372549019,
				Z: 0.0811321568627451,
			},
			value: 'XYZ(42, 54, 8)',
			X: 42,
			Y: 54,
			Z: 8,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=7F9900',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=7F9900',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=7F9900',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#269900',
			clean: '269900',
		},
		rgb: {
			fraction: {
				r: 0.14901960784313725,
				g: 0.6,
				b: 0,
			},
			r: 38,
			g: 153,
			b: 0,
			value: 'rgb(38, 153, 0)',
		},
		hsl: {
			fraction: {
				h: 0.2919389978213508,
				s: 1,
				l: 0.3,
			},
			h: 105,
			s: 100,
			l: 30,
			value: 'hsl(105, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.2919389978213508,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(105, 100%, 60%)',
			h: 105,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Japanese Laurel',
			closest_named_hex: '#0A6906',
			exact_match_name: false,
			distance: 5736,
		},
		cmyk: {
			fraction: {
				c: 0.7516339869281046,
				m: 0,
				y: 1,
				k: 0.4,
			},
			value: 'cmyk(75, 0, 100, 40)',
			c: 75,
			m: 0,
			y: 100,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2760156862745098,
				Y: 0.4608015686274509,
				Z: 0.07439607843137255,
			},
			value: 'XYZ(28, 46, 7)',
			X: 28,
			Y: 46,
			Z: 7,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=269900',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=269900',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=269900',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#009921',
			clean: '009921',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.6,
				b: 0.12941176470588237,
			},
			r: 0,
			g: 153,
			b: 33,
			value: 'rgb(0, 153, 33)',
		},
		hsl: {
			fraction: {
				h: 0.369281045751634,
				s: 1,
				l: 0.3,
			},
			h: 133,
			s: 100,
			l: 30,
			value: 'hsl(133, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.369281045751634,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(133, 100%, 60%)',
			h: 133,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Fun Green',
			closest_named_hex: '#016D39',
			exact_match_name: false,
			distance: 3869,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0,
				y: 0.7843137254901961,
				k: 0.4,
			},
			value: 'cmyk(100, 0, 78, 40)',
			c: 100,
			m: 0,
			y: 78,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.23791882352941174,
				Y: 0.43846352941176464,
				Z: 0.1945258823529412,
			},
			value: 'XYZ(24, 44, 19)',
			X: 24,
			Y: 44,
			Z: 19,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=009921',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=009921',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=009921',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#009945',
			clean: '009945',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.6,
				b: 0.27058823529411763,
			},
			r: 0,
			g: 153,
			b: 69,
			value: 'rgb(0, 153, 69)',
		},
		hsl: {
			fraction: {
				h: 0.4084967320261438,
				s: 1,
				l: 0.3,
			},
			h: 147,
			s: 100,
			l: 30,
			value: 'hsl(147, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.4084967320261438,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(147, 100%, 60%)',
			h: 147,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Green Haze',
			closest_named_hex: '#01A368',
			exact_match_name: false,
			distance: 1536,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0,
				y: 0.5490196078431374,
				k: 0.4,
			},
			value: 'cmyk(100, 0, 55, 40)',
			c: 100,
			m: 0,
			y: 55,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2634011764705882,
				Y: 0.4486564705882352,
				Z: 0.3287141176470588,
			},
			value: 'XYZ(26, 45, 33)',
			X: 26,
			Y: 45,
			Z: 33,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=009945',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=009945',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=009945',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#00998C',
			clean: '00998C',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.6,
				b: 0.5490196078431373,
			},
			r: 0,
			g: 153,
			b: 140,
			value: 'rgb(0, 153, 140)',
		},
		hsl: {
			fraction: {
				h: 0.4858387799564271,
				s: 1,
				l: 0.3,
			},
			h: 175,
			s: 100,
			l: 30,
			value: 'hsl(175, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.4858387799564271,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(175, 100%, 60%)',
			h: 175,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Persian Green',
			closest_named_hex: '#00A693',
			exact_match_name: false,
			distance: 318,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0,
				y: 0.0849673202614378,
				k: 0.4,
			},
			value: 'cmyk(100, 0, 8, 40)',
			c: 100,
			m: 0,
			y: 8,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.31365803921568625,
				Y: 0.46875921568627443,
				Z: 0.5933631372549021,
			},
			value: 'XYZ(31, 47, 59)',
			X: 31,
			Y: 47,
			Z: 59,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=00998C',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=00998C',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=00998C',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#008299',
			clean: '008299',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.5098039215686274,
				b: 0.6,
			},
			r: 0,
			g: 130,
			b: 153,
			value: 'rgb(0, 130, 153)',
		},
		hsl: {
			fraction: {
				h: 0.5250544662309368,
				s: 1,
				l: 0.3,
			},
			h: 189,
			s: 100,
			l: 30,
			value: 'hsl(189, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.5250544662309368,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(189, 100%, 60%)',
			h: 189,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Allports',
			closest_named_hex: '#0076A3',
			exact_match_name: false,
			distance: 366,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0.15032679738562094,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(100, 15, 0, 40)',
			c: 100,
			m: 15,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.29060588235294116,
				Y: 0.4079317647058823,
				Z: 0.6310686274509805,
			},
			value: 'XYZ(29, 41, 63)',
			X: 29,
			Y: 41,
			Z: 63,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=008299',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=008299',
		},
		contrast: {
			value: '#000000',
		},
		_links: {
			self: {
				href: '/id?hex=008299',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#005E99',
			clean: '005E99',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.3686274509803922,
				b: 0.6,
			},
			r: 0,
			g: 94,
			b: 153,
			value: 'rgb(0, 94, 153)',
		},
		hsl: {
			fraction: {
				h: 0.5642701525054464,
				s: 1,
				l: 0.3,
			},
			h: 203,
			s: 100,
			l: 30,
			value: 'hsl(203, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.5642701525054464,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(203, 100%, 60%)',
			h: 203,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Bahama Blue',
			closest_named_hex: '#026395',
			exact_match_name: false,
			distance: 153,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0.3856209150326797,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(100, 39, 0, 40)',
			c: 100,
			m: 39,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.24012117647058823,
				Y: 0.30696235294117646,
				Z: 0.6142403921568628,
			},
			value: 'XYZ(24, 31, 61)',
			X: 24,
			Y: 31,
			Z: 61,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=005E99',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=005E99',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=005E99',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#004D99',
			clean: '004D99',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.30196078431372547,
				b: 0.6,
			},
			r: 0,
			g: 77,
			b: 153,
			value: 'rgb(0, 77, 153)',
		},
		hsl: {
			fraction: {
				h: 0.582788671023965,
				s: 1,
				l: 0.3,
			},
			h: 210,
			s: 100,
			l: 30,
			value: 'hsl(210, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.582788671023965,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(210, 100%, 60%)',
			h: 210,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Congress Blue',
			closest_named_hex: '#02478E',
			exact_match_name: false,
			distance: 323,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0.49673202614379075,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(100, 50, 0, 40)',
			c: 100,
			m: 50,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2162811764705882,
				Y: 0.2592823529411764,
				Z: 0.6062937254901961,
			},
			value: 'XYZ(22, 26, 61)',
			X: 22,
			Y: 26,
			Z: 61,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=004D99',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=004D99',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=004D99',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#003B99',
			clean: '003B99',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.23137254901960785,
				b: 0.6,
			},
			r: 0,
			g: 59,
			b: 153,
			value: 'rgb(0, 59, 153)',
		},
		hsl: {
			fraction: {
				h: 0.6023965141612201,
				s: 1,
				l: 0.3,
			},
			h: 217,
			s: 100,
			l: 30,
			value: 'hsl(217, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.6023965141612201,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(217, 100%, 60%)',
			h: 217,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Smalt',
			closest_named_hex: '#003399',
			exact_match_name: false,
			distance: 72,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0.6143790849673202,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(100, 61, 0, 40)',
			c: 100,
			m: 61,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.19103882352941176,
				Y: 0.20879764705882353,
				Z: 0.5978796078431373,
			},
			value: 'XYZ(19, 21, 60)',
			X: 19,
			Y: 21,
			Z: 60,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=003B99',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=003B99',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=003B99',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#001799',
			clean: '001799',
		},
		rgb: {
			fraction: {
				r: 0,
				g: 0.09019607843137255,
				b: 0.6,
			},
			r: 0,
			g: 23,
			b: 153,
			value: 'rgb(0, 23, 153)',
		},
		hsl: {
			fraction: {
				h: 0.64161220043573,
				s: 1,
				l: 0.3,
			},
			h: 231,
			s: 100,
			l: 30,
			value: 'hsl(231, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.64161220043573,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(231, 100%, 60%)',
			h: 231,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Blue Gray',
			closest_named_hex: '#00069C',
			exact_match_name: false,
			distance: 356,
		},
		cmyk: {
			fraction: {
				c: 1,
				m: 0.8496732026143791,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(100, 85, 0, 40)',
			c: 100,
			m: 85,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.14055411764705883,
				Y: 0.10782823529411764,
				Z: 0.5810513725490196,
			},
			value: 'XYZ(14, 11, 58)',
			X: 14,
			Y: 11,
			Z: 58,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=001799',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=001799',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=001799',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#300099',
			clean: '300099',
		},
		rgb: {
			fraction: {
				r: 0.18823529411764706,
				g: 0,
				b: 0.6,
			},
			r: 48,
			g: 0,
			b: 153,
			value: 'rgb(48, 0, 153)',
		},
		hsl: {
			fraction: {
				h: 0.7189542483660131,
				s: 1,
				l: 0.3,
			},
			h: 259,
			s: 100,
			l: 30,
			value: 'hsl(259, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.7189542483660131,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(259, 100%, 60%)',
			h: 259,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Kingfisher Daisy',
			closest_named_hex: '#3E0480',
			exact_match_name: false,
			distance: 1663,
		},
		cmyk: {
			fraction: {
				c: 0.6862745098039216,
				m: 1,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(69, 100, 0, 40)',
			c: 69,
			m: 100,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.18592823529411764,
				Y: 0.08333882352941177,
				Z: 0.5739329411764706,
			},
			value: 'XYZ(19, 8, 57)',
			X: 19,
			Y: 8,
			Z: 57,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=300099',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=300099',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=300099',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#420099',
			clean: '420099',
		},
		rgb: {
			fraction: {
				r: 0.25882352941176473,
				g: 0,
				b: 0.6,
			},
			r: 66,
			g: 0,
			b: 153,
			value: 'rgb(66, 0, 153)',
		},
		hsl: {
			fraction: {
				h: 0.7385620915032679,
				s: 1,
				l: 0.3,
			},
			h: 266,
			s: 100,
			l: 30,
			value: 'hsl(266, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.7385620915032679,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(266, 100%, 60%)',
			h: 266,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Pigment Indigo',
			closest_named_hex: '#4B0082',
			exact_match_name: false,
			distance: 924,
		},
		cmyk: {
			fraction: {
				c: 0.5686274509803922,
				m: 1,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(57, 100, 0, 40)',
			c: 57,
			m: 100,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.21503882352941178,
				Y: 0.09834588235294117,
				Z: 0.5752952941176471,
			},
			value: 'XYZ(22, 10, 58)',
			X: 22,
			Y: 10,
			Z: 58,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=420099',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=420099',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=420099',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#540099',
			clean: '540099',
		},
		rgb: {
			fraction: {
				r: 0.32941176470588235,
				g: 0,
				b: 0.6,
			},
			r: 84,
			g: 0,
			b: 153,
			value: 'rgb(84, 0, 153)',
		},
		hsl: {
			fraction: {
				h: 0.7581699346405227,
				s: 1,
				l: 0.3,
			},
			h: 273,
			s: 100,
			l: 30,
			value: 'hsl(273, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.7581699346405227,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(273, 100%, 60%)',
			h: 273,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Purple',
			closest_named_hex: '#660099',
			exact_match_name: false,
			distance: 374,
		},
		cmyk: {
			fraction: {
				c: 0.4509803921568628,
				m: 1,
				y: 0,
				k: 0.4,
			},
			value: 'cmyk(45, 100, 0, 40)',
			c: 45,
			m: 100,
			y: 0,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2441494117647059,
				Y: 0.11335294117647059,
				Z: 0.5766576470588236,
			},
			value: 'XYZ(24, 11, 58)',
			X: 24,
			Y: 11,
			Z: 58,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=540099',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=540099',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=540099',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#990096',
			clean: '990096',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0.5882352941176471,
			},
			r: 153,
			g: 0,
			b: 150,
			value: 'rgb(153, 0, 150)',
		},
		hsl: {
			fraction: {
				h: 0.8366013071895425,
				s: 1,
				l: 0.3,
			},
			h: 301,
			s: 100,
			l: 30,
			value: 'hsl(301, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.8366013071895425,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(301, 100%, 60%)',
			h: 301,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Flirt',
			closest_named_hex: '#A2006D',
			exact_match_name: false,
			distance: 2150,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 0.019607843137254832,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 2, 40)',
			c: 0,
			m: 100,
			y: 2,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.3536164705882353,
				Y: 0.17003058823529413,
				Z: 0.5706976470588236,
			},
			value: 'XYZ(35, 17, 57)',
			X: 35,
			Y: 17,
			Z: 57,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=990096',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=990096',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=990096',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#990061',
			clean: '990061',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0.3803921568627451,
			},
			r: 153,
			g: 0,
			b: 97,
			value: 'rgb(153, 0, 97)',
		},
		hsl: {
			fraction: {
				h: 0.8943355119825708,
				s: 1,
				l: 0.3,
			},
			h: 322,
			s: 100,
			l: 30,
			value: 'hsl(322, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.8943355119825708,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(322, 100%, 60%)',
			h: 322,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Fresh Eggplant',
			closest_named_hex: '#990066',
			exact_match_name: false,
			distance: 33,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 0.36601307189542487,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 37, 40)',
			c: 0,
			m: 100,
			y: 37,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.31610078431372546,
				Y: 0.1550243137254902,
				Z: 0.3731427450980392,
			},
			value: 'XYZ(32, 16, 37)',
			X: 32,
			Y: 16,
			Z: 37,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=990061',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=990061',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=990061',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#99003D',
			clean: '99003D',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0.23921568627450981,
			},
			r: 153,
			g: 0,
			b: 61,
			value: 'rgb(153, 0, 61)',
		},
		hsl: {
			fraction: {
				h: 0.9335511982570807,
				s: 1,
				l: 0.3,
			},
			h: 336,
			s: 100,
			l: 30,
			value: 'hsl(336, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.9335511982570807,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(336, 100%, 60%)',
			h: 336,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Paprika',
			closest_named_hex: '#8D0226',
			exact_match_name: false,
			distance: 905,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 0.6013071895424836,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 60, 40)',
			c: 0,
			m: 100,
			y: 60,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.290618431372549,
				Y: 0.14483137254901962,
				Z: 0.23895450980392158,
			},
			value: 'XYZ(29, 14, 24)',
			X: 29,
			Y: 14,
			Z: 24,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=99003D',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=99003D',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=99003D',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#99002B',
			clean: '99002B',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0.16862745098039217,
			},
			r: 153,
			g: 0,
			b: 43,
			value: 'rgb(153, 0, 43)',
		},
		hsl: {
			fraction: {
				h: 0.9531590413943356,
				s: 1,
				l: 0.3,
			},
			h: 343,
			s: 100,
			l: 30,
			value: 'hsl(343, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.9531590413943356,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(343, 100%, 60%)',
			h: 343,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Burgundy',
			closest_named_hex: '#900020',
			exact_match_name: false,
			distance: 242,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 0.718954248366013,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 72, 40)',
			c: 0,
			m: 100,
			y: 72,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2778772549019608,
				Y: 0.1397349019607843,
				Z: 0.17186039215686277,
			},
			value: 'XYZ(28, 14, 17)',
			X: 28,
			Y: 14,
			Z: 17,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=99002B',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=99002B',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=99002B',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#99001A',
			clean: '99001A',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0.10196078431372549,
			},
			r: 153,
			g: 0,
			b: 26,
			value: 'rgb(153, 0, 26)',
		},
		hsl: {
			fraction: {
				h: 0.9716775599128541,
				s: 1,
				l: 0.3,
			},
			h: 350,
			s: 100,
			l: 30,
			value: 'hsl(350, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.9716775599128541,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(350, 100%, 60%)',
			h: 350,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Carmine',
			closest_named_hex: '#960018',
			exact_match_name: false,
			distance: 17,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 0.8300653594771242,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 83, 40)',
			c: 0,
			m: 100,
			y: 83,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.26584392156862746,
				Y: 0.134921568627451,
				Z: 0.10849372549019609,
			},
			value: 'XYZ(27, 13, 11)',
			X: 27,
			Y: 13,
			Z: 11,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=99001A',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=99001A',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=99001A',
			},
		},
		_embedded: {},
	},
	{
		hex: {
			value: '#990008',
			clean: '990008',
		},
		rgb: {
			fraction: {
				r: 0.6,
				g: 0,
				b: 0.03137254901960784,
			},
			r: 153,
			g: 0,
			b: 8,
			value: 'rgb(153, 0, 8)',
		},
		hsl: {
			fraction: {
				h: 0.9912854030501089,
				s: 1,
				l: 0.3,
			},
			h: 357,
			s: 100,
			l: 30,
			value: 'hsl(357, 100%, 30%)',
		},
		hsv: {
			fraction: {
				h: 0.9912854030501089,
				s: 1,
				v: 0.6,
			},
			value: 'hsv(357, 100%, 60%)',
			h: 357,
			s: 100,
			v: 60,
		},
		name: {
			value: 'Sangria',
			closest_named_hex: '#92000A',
			exact_match_name: false,
			distance: 71,
		},
		cmyk: {
			fraction: {
				c: 0,
				m: 1,
				y: 0.9477124183006536,
				k: 0.4,
			},
			value: 'cmyk(0, 100, 95, 40)',
			c: 0,
			m: 100,
			y: 95,
			k: 40,
		},
		XYZ: {
			fraction: {
				X: 0.2531027450980392,
				Y: 0.1298250980392157,
				Z: 0.04139960784313726,
			},
			value: 'XYZ(25, 13, 4)',
			X: 25,
			Y: 13,
			Z: 4,
		},
		image: {
			bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=990008',
			named: 'https://www.thecolorapi.com/id?format=svg&hex=990008',
		},
		contrast: {
			value: '#ffffff',
		},
		_links: {
			self: {
				href: '/id?hex=990008',
			},
		},
		_embedded: {},
	},
]
