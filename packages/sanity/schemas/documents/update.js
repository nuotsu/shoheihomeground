import Icon from '../../components/Icon'
import formatDate from '../../components/formatDate'

export default {
	name: 'update',
	title: 'Update',
	icon: Icon('🔔'),
	type: 'document',
	fields: [
		{
			name: 'date',
			type: 'date',
		},
		{
			name: 'type',
			type: 'reference',
			to: [
				{ type: 'photos' },
				{ type: 'graphic' },
			],
		},
		{
			name: 'content',
			type: 'text',
			rows: 2,
			hidden: ({ parent }) => !!parent.type,
		},
		{
			name: 'link',
			type: 'string',
			hidden: ({ parent }) => !!parent.type,
		},
	],
	preview: {
		select: {
			date: 'date',
			type: 'type.title',
			content: 'content',
		},
		prepare: ({ date, type, content }) => {
			return ({
				title: formatDate(date),
				subtitle: type || content,
			})
		},
	},
	orderings: [
		{
			title: 'Date',
			name: 'date',
			by: [{field: 'date', direction: 'desc'}],
		},
	],
}
