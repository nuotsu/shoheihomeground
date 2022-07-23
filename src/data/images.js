import byDate from './images-by-date.json'
import byCategory from './images-by-category.json'
import categories from '$lib/category/categories'

const codes = Object.keys(categories)

export function getLatest() {
	const date = Object.keys(byDate)[0]

	const groups = codes
		.map(c => {
			const images = byDate[date][c]

			if (images) return {
				category: c,
				images,
			}
		})
		.filter(Boolean)

	return {
		date,
		groups,
	}
}

export function getCategory(category) {
	return Object.entries(byCategory[category])
}
