<header>
	<h1 class="h1">
		<slot></slot>
	</h1>

	{#if date}
		<Date {date} />
	{/if}

	<slot name="sub"></slot>

	<!-- TODO: breadcrumbs -->
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1rem;
		padding: 1rem;
		background-color: #000;
		color: #fff;
	}

	@screen <sm {
		header {
			flex-direction: column;
		}
	}

	@screen sm {
		header {
			align-items: end;
		}
	}
</style>

<script>
	import Date from '$lib/Date.svelte'

	export let date
</script>
