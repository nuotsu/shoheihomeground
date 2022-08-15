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

	export function format_v1(date) {
		if (!date) return

		const { y, m, d } = date.match(/(?<y>\d{2})-(?<m>\d{2})-(?<d>\d{2})/).groups

		return new Intl.DateTimeFormat('en', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}).format(new Date('20' + y, m-1, d))
	}
</script>
