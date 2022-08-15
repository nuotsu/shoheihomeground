import S from '@sanity/desk-tool/structure-builder'

export const singleton = (title, id, views = []) => S.listItem()
	.title(title)
	.child(
		S.document()
			.schemaType(id)
			.documentId(id)
			.views([
				S.view.form(),
				...views,
			])
	)

export const list = (title, id) =>
	S.documentTypeListItem(id)
		.title(title)

export const group = (title, list) => S.listItem()
	.title(title)
	.child(
		S.list()
			.title(title)
			.items(list)
	)
