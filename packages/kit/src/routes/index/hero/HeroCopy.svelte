<div class="relative z-[1] mx-auto p-8 <md:px-4 prose <md:text-center">
	<h1 class="h0 <md:h1">
		<div class="text-gradient mb-2">Shohei Ohtani:</div>
		<span class="text-shadow">
			Greatest <Pipewriter text={['pitcher', 'hitter', 'athlete']} caretClass="border-[0.1ch]" />
			<br>
			of all time.
		</span>
	</h1>

	<h2 class="h2 <md:h3 font-normal text-shadow">
		Exclusive, high quality photographs<br class="<md:hidden">
		taken at Angels Stadium.
	</h2>

	<p class="flex flex-wrap items-center gap-4 md:text-xl <md:text-xl md:!mt-12 <md:justify-center">
		<a class="action-2" href="/browse">
			Browse all photos
			<Right/>
		</a>
		<a class="action-2" href="/featured">
			Featured photos
			<Right/>
		</a>
	</p>
</div>

<script>
	import { Pipewriter } from 'nuotsu.dev'
	import Right from '$icon/Right.svelte'
</script>
