import Icon from '../../components/Icon'
import formatDate from '../../components/formatDate'

export const photos = {
	name: 'photos',
	title: 'Photos',
	icon: Icon('💾'),
	type: 'document',
	fields: [
		{
			name: 'date',
			type: 'date',
		},
		{
			name: 'categories',
			type: 'array',
			of: [{ type: 'photoCategory' }],
			preview: {
				select: {
					title: 'category.name',
				},
			},
		},
	],
	preview: {
		select: {
			date: 'date',
			categories: 'categories',
		},
		prepare: ({ date, categories, ...selection }) => {
			const photos = categories?.reduce((acc, { photosets }) =>
				acc + photosets?.reduce((acc, { photos }) =>
					acc + photos?.length || 0,
					0),
				0
			)

			const featured = categories
				.flatMap(({ photosets }) => photosets.filter(p => p.featured))

			return ({
				title: formatDate(date),
				subtitle: [
					count(categories, '🏷', '🏷'),
					count(photos, '📸', '📸'),
					count(featured, '🎖', '🎖'),
				].join(' / '),
				...selection
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

export const photoCategory = {
	name: 'photoCategory',
	title: 'Photo category',
	type: 'object',
	fields: [
		{
			name: 'category',
			type: 'reference',
			to: [{ type: 'category' }],
		},
		{
			name: 'photosets',
			type: 'array',
			of: [{ type: 'photoset' }],
		},
	],
	preview: {
		select: {
			title: 'category.name',
			photosets: 'photosets',
			media: 'photosets.0.photos.0',
		},
		prepare: ({ photosets, ...selection }) => ({
			subtitle: count(Object.keys(photosets), 'photosets'),
			...selection,
		})
	},
}

export const photoset = {
	name: 'photoset',
	title: 'Photoset',
	type: 'object',
	fields: [
		{
			name: 'photos',
			type: 'array',
			of: [{ type: 'image' }],
			validation: Rule => Rule.required().min(1).custom(image => {
				return !image.some(({ asset }) => !asset._ref) || 'Error with image upload'
			})
		},
		{
			name: 'thumbnail',
			type: 'number',
			description: 'First photo = 1, second = 2, ...',
			validation: Rule => Rule.min(1),
			initialValue: 1,
		},
		{
			name: 'featured',
			type: 'boolean',
		},
	],
	preview: {
		select: {
			photos: 'photos',
			featured: 'featured',
			media: 'photos.0',
		},
		prepare: ({ photos, featured, ...selection }) => {
			return ({
				title: count(Object.keys(photos), 'photos'),
				subtitle: featured && 'Featured',
				...selection,
			})
		}
	},
}

function count(arr, item = 'items', singular) {
	const size = typeof arr === 'number'
		? arr
		: arr?.length || 0

	return [
		size,
		size !== 1 ? item : singular || item.slice(0,-1)
	].join(' ')
}
