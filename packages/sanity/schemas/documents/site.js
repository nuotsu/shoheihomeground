export default {
	name: 'site',
	title: 'Site',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	groups: [
		{ title: 'Homepage', name: 'homepg' },
	],
	fields: [
		{
			name: 'heroPhotos',
			type: 'array',
			of: [{ type: 'image' }],
			group: 'homepg',
		},
	],
	preview: {
		prepare: () => ({
			title: 'Site',
		})
	}
}
