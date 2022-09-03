<section id="graphics" class="section">
	<H2 link={{ url: '/graphics' }}>
		<a class="link-hover" href="/graphics">Graphics</a>
	</H2>

	<ul class="carousel mt-4 <xl:full-width <xl:px-4">
		{#each graphics.slice(0, 10) as { _id, image }, i}
			<li class="chiseled min-w-[150px] anim-fade" style:--delay={i / 25}>
				<a class="highlight" href="/graphics?id={_id}">
					<Img {image} h={300} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import H2 from '$lib/H2.svelte'
	import Img from '$lib/Img.svelte'
	import { urlFor } from '$utils/sanity'
	import { page } from '$app/stores'

	const { graphics } = $page.data.sanity
</script>
