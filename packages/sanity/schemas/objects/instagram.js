import Icon from '../../components/Icon'

export default {
	name: 'instagram',
	title: 'Instagram post',
	icon: Icon('🖼'),
	type: 'object',
	fields: [
		{
			name: 'id',
			type: 'string',
			placeholder: 'ChEQbcEOR5V',
		},
		{
			name: 'type',
			type: 'string',
			options: {
				list: [
					{ title: 'Post', value: 'p' },
					{ title: 'Reel', value: 'reel' },
				]
			},
			initialValue: 'p',
		},
	],
	preview: {
		select: {
			title: 'id',
			subtitle: 'type',
		},
	},
}
