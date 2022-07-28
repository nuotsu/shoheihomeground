<header class="bg-black text-white">
	<div class="section max-w-screen-xl mx-auto pb-4 sm:items-end <sm:flex-col">
		<h1 class="h1">
			<slot></slot>
		</h1>

		{#if date}
			<Date {date} />
		{/if}

		<slot name="sub"></slot>

		<!-- TODO: breadcrumbs -->
	</div>
</header>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1rem;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'

	export let date
</script>
