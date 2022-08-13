<section id="categories" class="bg-ink text-white">
	<div class="section">
		<H2>Catgories</H2>

		<ul class="mt-4">
			{#each Object.entries(categories) as [code, name]}
				<li>
					<a href="/{code}">{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(var(--col, 1), 1fr);
		gap: 1rem;
	}

	@screen sm { ul { --col: 2; } }
	@screen md { ul { --col: 3; } }
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import categories from './index'
</script>
