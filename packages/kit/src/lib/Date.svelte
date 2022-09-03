<time datetime={date}>
	{format(date, options)}

	{#if latest === date}
		<sup class="chiseled">New</sup>
	{/if}
</time>

<style>
	sup {
		font-size: 0.4em;
		font-style: normal;
		letter-spacing: 0.1ch;
		text-transform: uppercase;
		padding-inline: 1ch;

		@apply bg-accent text-white;
	}
</style>

<script>
	import { page } from '$app/stores'

	const latest = $page.data.sanity.dates[0]

	export let date, options = default_options
</script>

<script context="module">
	const default_options = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}

	export const format = (date, options = default_options) => new Intl
		.DateTimeFormat('en', options)
		.format(new Date(date + 'T00:00:00.000'))
</script>
