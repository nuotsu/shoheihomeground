const default_options = {
	month: 'short',
	day: 'numeric',
	year: 'numeric',
}

export default (date, options = default_options) => !!date && new Intl
	.DateTimeFormat('en', options)
	.format(new Date(date + 'T00:00:00.000'))
