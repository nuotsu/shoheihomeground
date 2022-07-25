<section>
	<h1>
		Latest
		<time datetime={latest}>{day(latest)}</time>
	</h1>
	<a class="link" href="/latest">View more</a>
</section>

<script>
	import byDate from '$data/images-by-date.json'
	import { day } from '$utils'

	const latest = Object.keys(byDate)[0]
</script>
