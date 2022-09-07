<ul class="root <md:flex-col">
	<li>
		<p>Recents</p>
		<ul>
			{#each dates.slice(0, 4) as date}
				<li><a href="/{date}"><Date {date} /></a></li>
			{/each}
			<li><a href="/browse">Browse all photos</a></li>
		</ul>
	</li>

	<li>
		<p><a href="/#categories">Categories</a></p>
		<ul class="columns-2 gap-x-8">
			<li><a href="/featured">&star; Featured</a></li>

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
		<ul>
			<li><a href="/about#contact">Contact</a></li>
			<li><a href="https://instagram.com/shoheihomeground" target="_blank">Instagram</a></li>
			<li><a href="https://youtube.com/shoheihomeground" target="_blank">YouTube</a></li>
			<li><a href="https://ohtani.fun" target="_blank">ohtani.fun</a></li>
		</ul>
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

	li a {
		@apply link-hover;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	const { dates, categories, graphics } = $page.data.sanity
</script>
