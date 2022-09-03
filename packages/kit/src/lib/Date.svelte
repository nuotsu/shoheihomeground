<time datetime={date}>
	{format(date, options)}

	{#if latest === date}
		<sup class="new-badge">New</sup>
	{/if}
</time>

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
