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
}
