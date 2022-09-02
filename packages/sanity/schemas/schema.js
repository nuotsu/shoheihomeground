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

// objects
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

		// objects
		seo,
		videoYoutube,
	]),
})
