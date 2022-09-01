import Icon from '../../components/Icon'

export default {
	name: 'video.youtube',
	title: 'Video (youtube)',
	icon: Icon('📺'),
	type: 'object',
	fields: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'url',
			title: 'Video URL',
			type: 'url',
			placeholder: 'https://www.youtube.com/watch?v=...',
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'url',
		},
	},
}