<section id="stats-updates" class="section">
	<Stats/>
	<Updates/>
</section>

<style>
	section {
		display: grid;
		align-items: center;
		gap: 1rem;
	}

	@screen md {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

<script>
	import Stats from './Stats.svelte'
	import Updates from './Updates.svelte'
</script>
