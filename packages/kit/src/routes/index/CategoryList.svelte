<section id="categories" class="bg-ink text-white">
	<div class="section">
		<H2>Catgories</H2>

		<ul class="grid gap-4 md:grid-cols-3 <md:gap-2 mt-4">
			{#each categories as { code, name }}
				<li>
					<a class="chiseled" href="/{code}">{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	@screen <md {
		ul {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}
	}

	a {
		display: block;
		padding: 1rem;

		@apply text-xl bg-white/10 hover:bg-white/20;
	}
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'

	const { categories } = $page.data.sanity
</script>
