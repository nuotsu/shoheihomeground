import S from '@sanity/desk-tool/structure-builder'
import { group, list, singleton } from './helpers'
import { orderableDocumentListDeskItem as orderableList } from '@sanity/orderable-document-list'
import Icon from '../components/Icon'

export default () => S.list()
	.title('Content')
	.items([
		singleton('Site', 'site').icon(Icon('💻')),
		group('Pages', [
			singleton('Home', 'page.index').icon(Icon('🏠')),
			singleton('About', 'page.about').icon(Icon('📄')),
		]).icon(Icon('📄')),
		list('Updates', 'update'),

		S.divider(),

		orderableList({ title: 'Categories', type: 'category', icon: Icon('🏷') }),
		list('Photos', 'photos'),
		list('Graphics', 'graphic'),

		S.divider(),

		list('Blog posts', 'blog.post').icon(Icon('📝')),
	])
