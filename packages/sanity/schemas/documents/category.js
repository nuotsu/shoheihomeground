import Icon from '../../components/Icon'
import { orderRankField } from '@sanity/orderable-document-list'

export default {
	name: 'category',
	title: 'Category',
	icon: Icon('🏷'),
	type: 'document',
	fields: [
		orderRankField({ type: 'category' }),
		{
			name: 'name',
			type: 'string',
		},
		{
			name: 'code',
			type: 'string',
		},
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'code',
		},
	},
}
