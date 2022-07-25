<section>
	<h2>Categories</h2>

	<ul>
		{#each Object.entries(categories) as [code, name]}
			<li>
				<a class="link" href="/{code}">{name}</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import categories from './index'
</script>
