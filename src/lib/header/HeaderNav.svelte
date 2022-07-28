<ul class="root grow flex <md:flex-col gap-x-4 <md:gap-y-2" class:closed={!$open} style:grid-area="nav">
	<li><a href="/#stats-updates">Stats & Updates</a></li>

	<li>
		<Menu title="Latest">
			<ul>
				{#each dates as date}
					<li><a href="/{date}">{day(date)}</a></li>
				{/each}
			</ul>
		</Menu>
	</li>

	<li>
		<Menu title="Categories">
			<ul class="columns-2 gap-8">
				{#each Object.entries(categories) as [code, name]}
					<li><a href="/{code}">{name}</a></li>
				{/each}
			</ul>
		</Menu>
	</li>

	<li><a href="/#graphics">Graphics</a></li>
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
</style>

<script>
	import { open } from './Toggle.svelte'
	import Menu from './Menu.svelte'
	import byDate from '$data/images-by-date.json'
	import { day } from '$lib/Date.svelte'
	import categories from '$lib/categories'

	const dates = Object.keys(byDate).slice(0,5)
</script>
