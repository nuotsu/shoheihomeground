<header class="bg-ink text-white dots moving">
	<div class="section max-w-screen-xl mx-auto pt-12 pb-4 sm:items-end <sm:flex-col">
		<h1 class="h1">
			<slot></slot>
		</h1>

		{#if date}
			<Date {date} />
		{/if}

		<slot name="sub"></slot>
	</div>
</header>

<Marquee/>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1rem;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'
	import Marquee from './Marquee.svelte'

	export let date
</script>
