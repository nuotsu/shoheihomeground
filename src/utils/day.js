export default function day(date) {
	return new Intl.DateTimeFormat('en', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}).format(new Date(date))
}
