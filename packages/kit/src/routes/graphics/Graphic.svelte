<figure class="flex flex-col text-center anim-fade" style:--delay={index / 20}>
	<button
		class="chiseled highlight"
		on:click={openModal}
	>
		<Img {image} h={600} />
	</button>

	<figcaption class="mt-4 px-4">
		{#if title}
			<h2 class="font-bold">{title}</h2>
		{/if}

		{#if date}
			<p class="text-sm"><Date {date} /></p>
		{/if}
	</figcaption>
</figure>

<style>
	button {
		display: block;
		margin: auto;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import { open } from '$lib/modal/Modal.svelte'
	import { selected_graphic } from './+page.svelte'

	export let title, description, image, date, index

	function openModal() {
		$open = true
		$selected_graphic = {
			image,
			title,
			description,
			date
		}
	}
</script>
