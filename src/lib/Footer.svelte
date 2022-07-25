<footer>
	<nav>
		<a href="/">Shohei Home Ground</a>

		<ul>
			<li>
				<p><a href="/latest">Latest</a></p>
				<ul>
					{#each dates as date}
						<li><a href="/{date}">{day(date)}</a></li>
					{/each}
				</ul>
			</li>
		</ul>
	</nav>

	<p>Shohei Home Ground &copy; {new Date().getFullYear()}. All rights reserved.</p>
</footer>

<script>
	import byDate from '$data/images-by-date.json'
	import { day } from '$utils'

	const dates = Object.keys(byDate).slice(0,5)
</script>
