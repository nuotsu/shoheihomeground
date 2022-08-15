import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import category from './documents/category'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		// documents
		category,
	]),
})
