export function day(date) {
	const { y, m, d } = date.match(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/).groups

	return new Intl.DateTimeFormat('en', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}).format(new Date(y, m-1, d))
}
