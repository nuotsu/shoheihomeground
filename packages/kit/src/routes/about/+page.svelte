<Head {...pg.seo} />

<H1>{pg.title}</H1>

<section class="section text-center">
	<header class="grid gap-4">
		<h2 class="h1">Featured videos</h2>
		<p>
			<a class="action" href="https://www.youtube.com/c/ShoheiHomeGround" target="_blank">
				Visit YouTube Channel
			</a>
		</p>
	</header>

	<ul class="grid md:grid-cols-2 gap-12 mt-8">
		{#each pg.videos as { title, url, orientation }}
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

<OhtaniFunAd/>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import OhtaniFunAd from '$lib/OhtaniFunAd.svelte'

	export let data

	const { pg } = data
</script>
