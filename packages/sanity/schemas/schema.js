import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import site from './documents/site'
import pageIndex from './documents/page.index'
import pageAbout from './documents/page.about'

import update from './documents/update'
import category from './documents/category'
import { photos, photoCategory, photoset } from './documents/photos'
import graphic from './documents/graphic'

import blogPost from './documents/blog.post'

// objects
import instagram from './objects/instagram'
import seo from './objects/seo'
import videoYoutube from './objects/video.youtube'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		// documents
		site,
		pageIndex,
		pageAbout,
		update,

		category,
		photos, photoCategory, photoset,
		graphic,

		blogPost,

		// objects
		instagram,
		seo,
		videoYoutube,
	]),
})
