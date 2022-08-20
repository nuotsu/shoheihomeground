<time datetime={date}>{format(date)}</time>

<script>
	export let date
</script>

<script context="module">
	export const format = (date, options = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}) => new Intl.DateTimeFormat('en', options).format(new Date(date + 'T00:00:00.000'))
</script>
