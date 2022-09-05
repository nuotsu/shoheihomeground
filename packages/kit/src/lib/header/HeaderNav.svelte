<ul class="root grow flex flex-wrap justify-end gap-y-2 gap-x-4" class:closed={!$open} style:grid-area="nav">
	<li><a href="/browse">Browse</a></li>

	<li>
		<Menu title="Recents">
			<DateNav/>
		</Menu>
	</li>

	<li>
		<Menu title="Categories">
			<ul class="columns-2 gap-8">
				{#each categories as { code, name }}
					<li><a href="/{code}">{name}</a></li>
				{/each}
			</ul>
		</Menu>
	</li>

	<li>
		<Menu title="Graphics" link="/graphics">
			<ul>
				{#each graphics.slice(0, 5) as { _id, title }}
					<li><a href="/graphics?id={_id}">{title}</a></li>
				{/each}
			</ul>
		</Menu>
	</li>
	<li><a href="/#stats-updates">Stats & Updates</a></li>
	<li><a href="/about" rel="external">About</a></li>
</ul>

<style>
	@screen <md {
		.root {
			flex-direction: column;
			margin-block: 1rem auto;
			max-height: calc(100vh - 7rem);
			overflow-y: auto;
			overscroll-behavior: contain;

			@apply text-lg;
		}
	}

	.root > li {
		@apply md:text-center;
	}

	.root > li > a {
		text-align: center;
		@apply font-bold;
	}

	a {
		@apply link-hover;
	}
</style>

<script>
	import { open } from './Toggle.svelte'
	import Menu from './Menu.svelte'
	import DateNav from './DateNav.svelte'
	import { page } from '$app/stores'

	const { categories, graphics } = $page.data.sanity
</script>
