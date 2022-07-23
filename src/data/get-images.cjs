const cloudinary = require('cloudinary').v2
const fs = require('fs')

require('dotenv').config()

cloudinary.config({
	cloud_name: process.env.NETLIFY_CLOUDINARY_NAME,
	api_key: process.env.NETLIFY_CLOUDINARY_API_KEY,
	api_secret: process.env.NETLIFY_CLOUDINARY_API_SECRET,
})

async function search(expression, results = [], cursor) {
	const { total_count, resources, next_cursor } = await cloudinary.search
		.expression(expression)
		.max_results(500)
		.next_cursor(cursor)
		.execute()
		.catch(console.error)

	results.push(...resources)

	if (next_cursor) {
		console.count('Batch')
		results.push(await search(expression, results, next_cursor))
	} else {
		console.log(`Found ${ total_count } images`)
	}

	return results
}

async function fetchImages({ byDateFile, byCategoryFile, codeRegex }) {
	const data = await search('folder=shoheihomeground/* && resource_type=image')

	const images = data
		.map(({ public_id, folder, width, height, aspect_ratio }) => {
			if (!folder) return

			const [date, code] = folder
				?.replace(/^shoheihomeground\//, '')
				?.replace(`/${ public_id }`, '')
				?.split('/')

			const { groups } = code.match(codeRegex)

			return ({
				date,
				...groups,
				public_id, width, height, aspect_ratio,
			})
		})
		.filter(Boolean)

	const byDate = groupBy('date', JSON.parse(JSON.stringify(images)), i => groupBy('category', i, groupByIndex))
	fs.writeFileSync(byDateFile, JSON.stringify(byDate))
	console.log(`Wrote to ${ byDateFile }`)

	const byCategory = groupBy('category', JSON.parse(JSON.stringify(images)), i => groupBy('date', i, groupByIndex))
	fs.writeFileSync(byCategoryFile, JSON.stringify(byCategory))
	console.log(`Wrote to ${ byCategoryFile }`)
}

fetchImages({
	byDateFile: 'src/data/images-by-date.json',
	byCategoryFile: 'src/data/images-by-category.json',
	codeRegex: /^(?<category>[_a-z])(?<i>\d{2})-(?<tn>\d)+(-(?<includes>[\d,]+))?/,
})

function groupBy(key, images, callback = i => i) {
	let grouped = new Object()

	for (let image of images) {
		let k = image[key]

		if (!grouped[k]) {
			grouped[k] = [image]
		} else {
			grouped[k] = [...grouped[k], image]
		}

		delete image[key]
	}

	for (let [key, value] of Object.entries(grouped)) {
		grouped[key] = callback(value)
	}

	return grouped
}

function groupByIndex(images) {
	let grouped = []

	images.forEach(({ i, tn, ...image }) => {
		const index = Number(i) - 1

		if (!grouped[index]) {
			grouped[index] = {
				index: i,
				thumbnail: Number(tn) - 1,
				images: [image],
			}
		} else {
			grouped[index].images.push(image)
		}
	})

	return grouped
}
