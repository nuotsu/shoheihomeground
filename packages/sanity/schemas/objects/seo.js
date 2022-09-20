export default {
	name: 'seo',
	title: 'SEO',
	type: 'object',
	options: { collapsible: true, collapsed: false },
	fields: [
		{
			name: 'title',
			title: 'Meta title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Meta description',
			type: 'text',
			rows: 3,
			validation: Rule => Rule.max(160).warning('<160 characters recommended'),
		},
		{
			name: 'slug',
			description: 'permalink',
			type: 'slug',
			options: {
				source: doc => doc.title,
			},
			validation: Rule => Rule.required(),
		},
	],
}
