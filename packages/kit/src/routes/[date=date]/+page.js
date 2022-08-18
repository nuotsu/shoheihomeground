import { error } from '@sveltejs/kit';
import byDate from '$data/images-by-date.json'

export async function load({ params }) {
	const { date } = params
	const data = byDate[date]

	if (!data) throw error(404, 'No images for this date were found.');

	return {
		date,
		imagesByCategory: Object.entries(data),
	}
}
