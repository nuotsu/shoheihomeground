import S from '@sanity/desk-tool/structure-builder'
import { list } from './helpers'
import { orderableDocumentListDeskItem as orderableList } from '@sanity/orderable-document-list'
import { VscTag } from 'react-icons/vsc'

export default () => S.list()
	.title('Content')
	.items([
		list('Photos', 'photos'),
		orderableList({ title: 'Categories', type: 'category', icon: VscTag }),
	])
