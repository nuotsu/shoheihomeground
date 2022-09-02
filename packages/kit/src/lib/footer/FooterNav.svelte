<ul class="root <md:flex-col">
	<li>
		<p><a href="/latest">Latest</a></p>
		<ul>
			{#each dates.slice(0, 5) as date}
				<li><a href="/{date}"><Date {date} /></a></li>
			{/each}
		</ul>
	</li>

	<li>
		<p><a href="/#categories">Categories</a></p>
		<ul class="columns-2 gap-x-8">
			{#each categories as { code, name }}
				<li><a href="/{code}">{name}</a></li>
			{/each}
		</ul>
	</li>

	<li>
		<p><a href="/#graphics">Graphics</a></p>
		<ul>
			{#each graphics.slice(0, 5) as { _id, title }}
				<li><a href="/graphics?id={_id}">{title}</a></li>
			{/each}
		</ul>
	</li>

	<li>
		<p><a href="/about">About</a></p>
	</li>
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

	li > a {
		@apply link-hover;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	const { dates, categories, graphics } = $page.data.sanity
</script>
