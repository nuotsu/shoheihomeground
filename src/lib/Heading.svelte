<header>
	<h1>
		{#if title}
			{title}
		{:else}
			<Date {date} />
		{/if}
	</h1>

	{#if !!title && date}
		<Date {date} />
	{/if}

	<slot></slot>

	<!-- TODO: breadcrumbs -->
</header>

<style>
	header {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background-color: #000;
		color: #fff;
	}

	h1 {
		font-weight: bold;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'

	export let title, date
</script>
