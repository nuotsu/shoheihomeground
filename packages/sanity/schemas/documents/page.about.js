export default {
	name: 'page.about',
	title: 'About page',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'videos',
			type: 'array',
			of: [{ type: 'video.youtube' }],
		},
		{
			name: 'instagram',
			type: 'array',
			of: [{ type: 'instagram' }],
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo',
			validation: Rule => Rule.required(),
		},
	],
	preview: {
		prepare: () => ({
			title: '/about',
		})
	},
}
