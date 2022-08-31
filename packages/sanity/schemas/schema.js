import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import site from './documents/site'
import update from './documents/update'
import category from './documents/category'
import { photos, photoCategory, photoset } from './documents/photos'
import graphic from './documents/graphic'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		// documents
		site,
		update,
		category,
		photos, photoCategory, photoset,
		graphic,
	]),
})
