const richtext = ({ of = [], styles = [] } = {}) => ({
	name: 'richtext',
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				...styles,
			],
		},
		...of,
	],
})

export default {
	richtext,
}
