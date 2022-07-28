<time datetime={date}>{day(date)}</time>

<script>
	export let date
</script>

<script context="module">
	export function day(date) {
		if (!date) return

		const { y, m, d } = date.match(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/).groups

		return new Intl.DateTimeFormat('en', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}).format(new Date(y, m-1, d))
	}
</script>
