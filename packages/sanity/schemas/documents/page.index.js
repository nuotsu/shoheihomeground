export default {
	name: 'page.index',
	title: 'Home page',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'heroPhotos',
			type: 'array',
			of: [{ type: 'image' }],
			validation: Rule => Rule.max(6).warning('Loading many images may affect site performance'),
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
			title: '/',
		})
	},
}
