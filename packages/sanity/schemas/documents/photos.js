import { IoIosImages } from 'react-icons/io'

export const photos = {
	name: 'photos',
	title: 'Photos',
	icon: IoIosImages,
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
			title: 'date',
			categories: 'categories',
		},
		prepare: ({ categories, ...selection }) => {
			const photos =
				categories?.reduce((acc, { photosets }) =>
					acc + photosets?.reduce((acc, { photos }) =>
						acc + photos?.length || 0,
						0),
					0
				)

			return ({
				subtitle: [
					count(categories, 'categories', 'category'),
					count(photos, 'photos')
				].join(', '),
				...selection
			})
		},
	},
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
		},
		{
			name: 'thumbnail',
			type: 'number',
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

	return `${ size } ${ size !== 1 ? item : singular || item.slice(0,-1) }`
}
