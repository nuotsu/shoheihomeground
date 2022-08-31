import Icon from '../../components/Icon'

export default {
	name: 'graphic',
	title: 'Graphic',
	icon: Icon('🗯'),
	type: 'document',
	fields: [
		{
			name: 'description',
			type: 'text',
			rows: 3,
		},
		{
			name: 'date',
			type: 'date',
		},
		{
			name: 'image',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'description',
			subtitle: 'date',
			media: 'image',
		},
	},
	orderings: [
		{
			title: 'Description',
			name: 'description',
			by: [{field: 'description', direction: 'asc'}],
		},
		{
			title: 'Date',
			name: 'date',
			by: [{field: 'date', direction: 'desc'}],
		},
	]
}
