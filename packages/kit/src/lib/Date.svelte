<time datetime={date}>{format(date, options)}</time>

<script>
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
