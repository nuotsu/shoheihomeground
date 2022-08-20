<ul class="root grow flex <md:flex-col gap-x-4 <md:gap-y-2" class:closed={!$open} style:grid-area="nav">
	<li><a href="/all-photos">All Photos</a></li>

	<li>
		<Menu title="Latest" link="/latest">
			<ul>
				{#each latestDates as date}
					<li><a href="/{date}"><Date {date} /></a></li>
				{/each}
			</ul>
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

	<li><a href="/#graphics">Graphics</a></li>
	<li><a href="/#stats-updates">Stats & Updates</a></li>
	<li>About</li>
</ul>

<style>
	@screen <md {
		.root {
			margin-block: 1rem;
			max-height: calc(100vh - 10rem);
			overflow-y: auto;
		}
	}

	a {
		@apply link-hover;
	}
</style>

<script>
	import { open } from './Toggle.svelte'
	import Menu from './Menu.svelte'
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	const { latestDates, categories } = $page.data.sanity
</script>
