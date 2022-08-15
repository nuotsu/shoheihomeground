import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

import { env } from '$env/dynamic/public'

const client = sanityClient({
	projectId: env.PUBLIC_SANITY_ID,
	dataset: env.PUBLIC_SANITY_DATASET,
	apiVersion: '2022-08-14',
	useCdn: true,
	token: env.PUBLIC_SANITY_TOKEN,
})

export default client

const builder = imageUrlBuilder(client)

export function urlFor(source) {
	return builder.image(source)
}
