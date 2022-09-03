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

<script>
	import { page } from '$app/stores'

	const { videos } = $page.data.pg
</script>
