<section class="section">
	<div class="prose">
		<h1 class="md:h0 h1">
			Shohei Ohtani:<br>
			Greatest <Pipewriter text={['pitcher', 'hitter', 'athlete']} />
			<br>
			of all time.
		</h1>
		<h2 class="h2">High quality photographs taken at Angels Stadium.</h2>
		<p>
			<a class="action" href="#categories">
				View photos
				<Right/>
			</a>
		</p>
	</div>

	<dl>
		<div>
			<dt class="h1">{total_count.toLocaleString()}</dt>
			<dd>photos</dd>
		</div>
		<div>
			<dt class="h1">{total_days.toLocaleString()}</dt>
			<dd>days</dd>
		</div>
	</dl>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		align-items: center;
		background-color: #000;
		color: #fff;
	}

	@screen md {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	dl {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		text-align: center;
	}
</style>

<script>
	import Pipewriter from 'nuotsu.dev/snippets/pipewriter/Pipewriter.svelte'
	import Right from '$icon/Right.svelte'
	import { total_count, total_days } from '../data/images-metadata.json'
</script>
