export const data = {
	header: {
		url: 'logo',
		menu: [
			{id: 0, name: 'Home', link: ''},
			{id: 1, name: 'About us', link: 'about'},
			{id: 2, name: 'Our results', link: 'results'},
			{id: 3, name: 'How we help?', link: 'help'},
			{id: 4, name: 'Testimonials', link: 'testimonials'},
			{id: 5, name: 'New & Resources', link: 'news'},
		],
		btn: {
			name: 'Donate now',
			theme: 'orange'
		}
	},

	main: {
		title: 'Giving help to those who need it',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.',
		btn: [
			{
				name: 'Donate now', 
				theme: 'orange'
			},
			{
				name: 'About our charity',
				theme: 'light'
			}
		],
		url: 'main',
		items: [
			{count: '200', etc: 'm', describe: 'Humans impacted'},
			{count: '50', etc: 'k', describe: 'Collaborators'},
			{count: '370', etc: 'k', describe: 'Donations'},
			{count: '100', etc: '+', describe: 'Assisted communities'}
		]
	},

	about: {
		title: 'We are here to support vulnerable communities',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua molestie a iaculis at erat pellentesque adipiscing commodo elit at.',
		text: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla posuere sollicitudin pretium aenean pharetra magna ac placerat.',
		list: [
			{id: '0', text: 'Excepteur sint occaecat cupidatat non proident'},
			{id: '1', text: 'Pellentesque elit ullamcorper dignissim'},
			{id: '2', text: 'Nibh mauris cursus mattis molestie a iaculis'}
		],
		btn: [
			{
				name: 'Donate now', 
				theme: 'orange'
			},
			{
				name: 'About us',
				theme: 'light'
			}
		]
	},

	results: {
		content: {
			title: 'Take a look at the big impact we have done',
			items: [
				{url: 'heart', count: '500m', describe: 'Liters of water'},
				{url: 'ball', count: '10,000+', describe: 'Toys delivered'},
				{url: 'hands', count: '7000+', describe: 'Houses built'},
				{url: 'school', count: '2000+', describe: 'Schools built'}
			],
			btn: {
				name: 'Donate now',
				theme: 'orange'
			},
			url: 'boy'
		},

		video: {
			title: 'We have helped over 200 vulnerable communities worldwide',
			btn: [
				{
					name: 'Donate now', 
					theme: 'dark'
				},
				{
					name: 'About our charity',
					theme: 'light'
				}
			],
			url: '',
			items: [
				{title: 'The goal and mission behind', text: 'Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc id cursus metus aliquam eleifend. Dictumst quisque sagittis purus sit amet volutpat consequa.'},
				{title: 'How our charity got started', text: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla posuere sollicitudin pretium aenean pharetra magna ac placerat.'}
			]
		}
	},

	help: {
		title: 'What are we doing to assist these communities?',
		btn: {name: 'Donate now', theme: 'orange'},
		cards: [
			{id: '0', icon: 'house', title: 'House & shelter', subtitle: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.'},
			{id: '1', icon: 'heart', title: 'Love & support', subtitle: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.'},
			{id: '2', icon: 'basket', title: 'Food & groceries', subtitle: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.'},
			{id: '3', icon: 'tree', title: 'Environmental help', subtitle: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.'},
			{id: '4', icon: 'school', title: 'Education', subtitle: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.'},
			{id: '5', icon: 'health', title: 'Health & insurance', subtitle: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.'}
		]
	},

	testimonials: {
		man: {
			url: 'girls',
			describe: '“Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.”',
			name: 'Amara Onai',
			sitizen: 'Citizen of South Africa'
		},
		title: 'See how we are making a difference',
		subtitle: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis etolme netus et malesuada fames urna nec tincidunt praesen',
		items:  [
			{id:'0', name: 'Excepteur sint occaecat cupidatat non proident'},
			{id:'1', name: 'Pellentesque elit ullamcorper dignissim'},
			{id:'2', name: 'Nibh mauris cursus mattis molestie a iaculis'}
		],
		btn: {name: 'Donate now', theme: 'orange'}
	},

	news: {
		title: 'Read our latest news',
		items: [
			{url: 'food', type: 'Articles', date: 'Feb 11, 2022', title: 'What to donate to a food bank and what to avoid ?', etc: 'Read more'},
			{url: 'clothes', type: 'Resources', date: 'Feb 11, 2022', title: '13 ways to give to charity without breaking your budget', etc: 'Read more'}
		],
		btn: [
			{name: 'Donate now', theme: 'orange'},
			{name: 'Read more news', theme: 'light'}
		]
	},

	footer: {
		menu: [
			{id: 0, name: 'Home'},
			{id: 1, name: 'About'},
			{id: 2, name: 'Blog'},
			{id: 3, name: 'Blog post'},
			{id: 4, name: 'Donate'},
			{id: 5, name: 'Donate single'},
			{id: 6, name: 'Contact'},
		],
		pages: [
			{id: 0, name: 'Start her'},
			{id: 1, name: 'Styleguide'},
			{id: 2, name: 'Password Protected'},
			{id: 3, name: '404 Not found'},
			{id: 4, name: 'Licenses'},
			{id: 5, name: 'Changelog'},
		],
		btn: [
			{
				name: 'Donate now', 
				theme: 'dark'
			},
			{
				name: 'More ways to help',
				theme: 'light'
			}
		]
	}
}