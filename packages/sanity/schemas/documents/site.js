export default {
	name: 'site',
	title: 'Site',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			name: 'heroPhotos',
			type: 'array',
			of: [{ type: 'image' }],
		},
		{
			name: 'ad',
			title: 'Ad banner',
			type: 'object',
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
	],
	preview: {
		prepare: () => ({
			title: 'Site',
		})
	}
}
