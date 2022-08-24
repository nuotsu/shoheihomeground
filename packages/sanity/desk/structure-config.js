import S from '@sanity/desk-tool/structure-builder'
import { list, singleton } from './helpers'
import { orderableDocumentListDeskItem as orderableList } from '@sanity/orderable-document-list'
import Icon from '../components/Icon'

export default () => S.list()
	.title('Content')
	.items([
		singleton('Site', 'site').icon(Icon('💻')),

		S.divider(),

		orderableList({ title: 'Categories', type: 'category', icon: Icon('🏷') }),
		list('Photos', 'photos'),
		list('Graphics', 'graphic'),
	])
