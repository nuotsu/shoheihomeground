import { error } from '@sveltejs/kit';
import byDate from '$data/images-by-date.json'
import sortBy from '$utils/sortBy'

export async function load({ params }) {
	const { date, category, photoset } = params
	const images = sortBy(byDate[date][category][photoset].images, 'public_id')

	if (!images) throw error(404, 'No images for this category and date were found.');

	return {
		...params,
		images,
	}
}
