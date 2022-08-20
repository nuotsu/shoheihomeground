import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	return await client.fetch(groq`{
		'points': *[_type == 'photos']{
			date,
			'categories': categories[].category->code
		},
		'photos': *[_type == 'photos']|order(date desc){
			date,
			categories[]{
				category->,
				photosets[]{
					...,
					'category': ^.category->,
					'date': ^.^.date
				}
			}
		}
	}`)
}
