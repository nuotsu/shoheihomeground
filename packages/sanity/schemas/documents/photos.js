import { VscSave } from 'react-icons/vsc'

export const photos = {
	name: 'photos',
	title: 'Photos',
	icon: VscSave,
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
			subtitle: count(photosets, 'photosets'),
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
				title: count(photos, 'photos'),
				subtitle: featured && 'Featured',
				...selection,
			})
		}
	},
}

function count(arr = {}, name = 'items') {
	return `${ Object.keys(arr)?.length || 0 } ${name}`
}
