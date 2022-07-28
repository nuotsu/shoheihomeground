<ul class="root" class:closed={!$open}>
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
			<ul>
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
	.root {
		grid-area: nav;
		flex-grow: 1;
		display: flex;
		gap: 0 1rem;
	}

	@screen <md {
		.root {
			flex-direction: column;
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
	import { day } from '$utils'
	import categories from '$lib/categories'

	const dates = Object.keys(byDate).slice(0,5)
</script>
