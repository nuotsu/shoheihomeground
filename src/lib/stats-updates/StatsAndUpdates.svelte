<section id="stats-updates">
	<Stats/>
	<Updates/>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		align-items: center;
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
