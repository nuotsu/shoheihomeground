<ul class="root grow flex <md:flex-col gap-x-4 <md:gap-y-2" class:closed={!$open} style:grid-area="nav">
	<li><a href="/all-photos">All Photos</a></li>

	<li>
		<Menu title="Recent Photos" link="/latest">
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
				{#each graphics.slice(0, 5) as graphic}
					<li><a href="/graphics#{graphic._id}">{graphic.title}</a></li>
				{/each}
			</ul>
		</Menu>
	</li>
	<li><a href="/#stats-updates">Stats & Updates</a></li>
	<li><a href="/about">About</a></li>
</ul>

<style>
	@screen <md {
		.root {
			margin-block: 1rem;
			max-height: calc(100vh - 10rem);
			overflow-y: auto;
		}
	}

	.root > li > a {
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
