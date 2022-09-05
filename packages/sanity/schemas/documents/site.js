export default {
	name: 'site',
	title: 'Site',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'logo',
			type: 'object',
			options: { columns: 2 },
			fields: [
				{
					name: 'large',
					type: 'image',
				},
				{
					name: 'small',
					type: 'image',
				},
			],
		},
		{
			name: 'ogimage',
			title: 'Social image',
			type: 'image',
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
