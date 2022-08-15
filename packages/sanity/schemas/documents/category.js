import { orderRankField } from '@sanity/orderable-document-list'
import { VscTag } from 'react-icons/vsc'

export default {
	name: 'category',
	title: 'Category',
	icon: VscTag,
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
