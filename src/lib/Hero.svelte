<section class="bg-black text-white">
	<div class="section md:grid-cols-2 md:py-12">
		<div class="prose">
			<h1 class="md:h0 h1">
				Shohei Ohtani:<br>
				Greatest <Pipewriter text={['pitcher', 'hitter', 'athlete']} />
				<br>
				of all time.
			</h1>
			<h2 class="h2">High quality photographs taken at Angels Stadium.</h2>
			<p class="<md:text-center">
				<a class="action" href="#categories">
					View photos
					<Right/>
				</a>
			</p>
		</div>

		<dl>
			<div>
				<dt class="h0">{total_count.toLocaleString()}</dt>
				<dd>photos</dd>
			</div>
			<div>
				<dt class="h0">{total_days.toLocaleString()}</dt>
				<dd>days</dd>
			</div>
		</dl>
	</div>
</section>

<style>
	.section {
		display: grid;
		gap: 3rem 1rem;
		align-items: center;
	}

	dl {
		display: flex;
		gap: 3rem;
		text-align: center;
		justify-content: center;
	}
</style>

<script>
	import Pipewriter from 'nuotsu.dev/snippets/pipewriter/Pipewriter.svelte'
	import Right from '$icon/Right.svelte'
	import { total_count, total_days } from '../data/images-metadata.json'
</script>
