import { error } from '@sveltejs/kit';
import byCategory from '$data/images-by-category.json'

export async function load({ params }) {
	const { category } = params
	const data = byCategory[category]

	if (!data) throw error(404, 'No images for this category were found.');

	return {
		category,
		imagesByDate: Object.entries(data),
	}
}
