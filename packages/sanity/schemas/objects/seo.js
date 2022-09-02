export default {
	name: 'seo',
	title: 'SEO',
	type: 'object',
	options: { collapsible: true, collapsed: true },
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
	],
}
