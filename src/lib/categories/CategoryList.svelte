<section id="categories">
	<H2>Catgories</H2>

	<ul>
		{#each Object.entries(categories) as [code, name]}
			<li>
				<a class="link" href="/{code}">{name}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding: 1rem;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(var(--col, 1), 1fr);
		gap: 1rem;
		margin-top: 1rem;
	}

	@screen sm { ul { --col: 2; } }
	@screen md { ul { --col: 3; } }
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import categories from './index'
</script>
