export default {
	name: 'site',
	title: 'Site',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	groups: [
		{ title: 'Global', name: 'global', default: true },
		{ title: 'Home', name: 'home' },
		{ title: 'About', name: 'about' },
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			group: 'global',
		},
		{
			name: 'ogimage',
			title: 'Social image',
			type: 'image',
			group: 'global',
		},
		{
			name: 'heroPhotos',
			type: 'array',
			of: [{ type: 'image' }],
			group: 'home',
		},
		{
			name: 'ad',
			title: 'Ad banner',
			type: 'object',
			group: 'home',
			options: { collapsible: true, collapsed: true },
			fields: [
				{
					name: 'imgDesktop',
					type: 'image',
				},
				{
					name: 'imgMobile',
					type: 'image',
				},
				{
					name: 'title',
					type: 'string',
				},
				{
					name: 'url',
					title: 'URL',
					type: 'url',
				},
			],
		},
		{
			name: 'featuredVideos',
			type: 'array',
			of: [{ type: 'video.youtube' }],
			group: 'about',
		},
	],
	preview: {
		prepare: () => ({
			title: 'Site',
		})
	}
}
