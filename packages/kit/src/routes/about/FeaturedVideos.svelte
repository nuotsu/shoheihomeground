<section class="section text-center">
	<header class="grid gap-4">
		<h2 class="h1">Featured videos from YouTube</h2>
		<p>
			<a class="action text-xl gap-3" href="https://www.youtube.com/c/ShoheiHomeGround" target="_blank">
				<YouTube/>
				Visit Official Channel
			</a>
		</p>
	</header>

	<ul class="grid md:grid-cols-2 gap-12 mt-8">
		{#each videos as { title, url, orientation }}
			{@const vertical = orientation === 'vertical'}

			<li class="grid gap-2">
				<iframe
					class="chiseled {vertical ? 'aspect-[9/16] h-[450px] mx-auto' : 'aspect-video w-full'}"
					src={url}
					{title}
				/>
				<h2 class="h2">{title}</h2>
			</li>
		{/each}
	</ul>
</section>

<style>
	a :global(svg) {
		@apply fill-accent;
	}
</style>

<script>
	import YouTube from '$icon/YouTube.svelte'
	import { page } from '$app/stores'

	const { videos } = $page.data.pg
</script>
