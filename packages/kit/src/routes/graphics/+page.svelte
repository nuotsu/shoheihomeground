<Head title="Graphics" />

<H1>Graphics</H1>

<section class="section grid gap-y-8 gap-x-12 items-center <md:px-0 overflow-hidden">
	{#each graphics as { _id, title, description, image, date }, i}
		<figure id={_id} class="flex flex-col text-center anim-fade" style:--delay={i / 20}>
			<div class="chiseled">
				<Img {image} h={600} />
			</div>

			<figcaption class="mt-4 px-4">
				{#if title}
					<h2 class="font-bold">{title}</h2>
				{/if}

				{#if description}
					<p>{description}</p>
				{/if}

				{#if date}
					<p class="text-sm"><Date {date} /></p>
				{/if}
			</figcaption>
		</figure>
	{/each}
</section>

<style>
	@screen md {
		section {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	figure .chiseled {
		display: block;
		margin: auto;
	}

	figure:target .chiseled {
		animation: target 1.4s ease-in-out;
	}

	@keyframes target {
		40%, 60% {
			scale: 1.02;
			filter: saturate(1.2) brightness(1.2);
		}

		30%, 50% {
			scale: 1;
			filter: saturate(1) brightness(1);
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	const { graphics } = $page.data.sanity
</script>
