import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

import {
	PUBLIC_SANITY_ID,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_TOKEN,
} from '$env/static/public'

const client = sanityClient({
	projectId: PUBLIC_SANITY_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2022-08-01',
	useCdn: true,
	token: PUBLIC_SANITY_TOKEN,
})

export default client

const builder = imageUrlBuilder(client)

export function urlFor(source) {
	return builder.image(source)
}
