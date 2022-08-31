import Icon from '../../components/Icon'
import formatDate from '../../components/formatDate'

export default {
	name: 'graphic',
	title: 'Graphic',
	icon: Icon('🗯'),
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
		},
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
			title: 'title',
			date: 'date',
			media: 'image',
		},
		prepare: ({ date, ...selection }) => ({
			subtitle: formatDate(date),
			...selection,
		}),
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
	],
}
