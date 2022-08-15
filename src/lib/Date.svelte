<time datetime={date}>{format(date)}</time>

<script>
	export let date
</script>

<script context="module">
	export function format(date) {
		if (!date) return

		const { y, m, d } = date.match(/(?<y>\d{2})-(?<m>\d{2})-(?<d>\d{2})/).groups

		return new Intl.DateTimeFormat('en', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}).format(new Date('20' + y, m-1, d))
	}
</script>
