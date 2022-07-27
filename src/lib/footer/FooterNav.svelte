<ul class="root">
	<li>
		<p><a href="/latest">Latest</a></p>
		<ul>
			{#each dates as date}
				<li><a href="/{date}"><Date {date} /></a></li>
			{/each}
		</ul>
	</li>

	<li>
		<p><a href="/#categories">Categories</a></p>
		<ul class="categories">
			{#each Object.entries(categories) as [code, name]}
				<li><a href="/{code}">{name}</a></li>
			{/each}
		</ul>
	</li>

	<li><p><a href="/#graphics">Graphics</a></p></li>
	<li><p>About</p></li>
</ul>

<style>
	.root {
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 1rem;
	}

	@screen <md {
		.root {
			flex-direction: column;
		}
	}

	li > p {
		font-weight: bold;
	}

	.categories {
		columns: 2;
		gap: 0 2rem;
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import categories from '$lib/categories'
	import Date from '$lib/Date.svelte'

	const dates = Object.keys(byDate).slice(0,5)
</script>
