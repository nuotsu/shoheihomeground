<ul class="root <md:flex-col">
	<li>
		<p><a href="/latest">Latest</a></p>
		<ul>
			{#each latestDates as date}
				<li><a class="link-hover" href="/{date}"><Date {date} /></a></li>
			{/each}
		</ul>
	</li>

	<li>
		<p><a href="/#categories">Categories</a></p>
		<ul class="columns-2 gap-x-8">
			{#each categories as { code, name }}
				<li><a class="link-hover" href="/{code}">{name}</a></li>
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

	li > p {
		font-weight: bold;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	const { latestDates, categories } = $page.stuff.sanity
</script>
