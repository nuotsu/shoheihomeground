<section id="categories">
	<h2>Categories</h2>

	<ul>
		{#each Object.entries(categories) as [code, name]}
			<li>
				<a class="link" href="/{code}">{name}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>

<script>
	import categories from './index'
</script>
