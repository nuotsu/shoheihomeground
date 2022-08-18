<section class="bg-ink text-white">
	<div class="section md:grid-cols-2 md:py-12">
		<div class="prose">
			<h1 class="md:h0 h1">
				<span class="text-gradient">Shohei Ohtani:</span><br>
				Greatest <Pipewriter text={['pitcher', 'hitter', 'athlete']} />
				<br>
				of all time.
			</h1>
			<h2 class="h2">High quality photographs taken at Angels Stadium.</h2>
			<p class="<md:text-center">
				<a class="action" href="/all-photos">
					View all photos
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
				<dt class="h0">{photos.length.toLocaleString()}</dt>
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
	import { Pipewriter } from 'nuotsu.dev'
	import Right from '$icon/Right.svelte'
	import { page } from '$app/stores'

	const { photos } = $page.data.sanity

	const total_count = photos
		.flatMap(p => p.categories.flatMap(c => c.photosets?.map((s => s.photos?.length)) || 0))
		.reduce((a, b) => a + b, 0)
</script>
