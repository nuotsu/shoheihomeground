<Head title="Graphics" />

<H1>Graphics</H1>

<section class="section grid gap-y-8 gap-x-12 items-center overflow-hidden">
	{#each graphics as graphic, index}
		<Graphic {...graphic} {index} />
	{/each}
</section>

<Modal>
	<ModalGraphic {...$selected_graphic} />
</Modal>

<style>
	@screen md {
		section {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Modal, { open } from '$lib/modal/Modal.svelte'
	import ModalGraphic from '$lib/modal/ModalGraphic.svelte'
	import Graphic from './Graphic.svelte'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { afterNavigate } from '$app/navigation'

	const { graphics } = $page.data.sanity

	function openGraphicFromIdParam() {
		const params = new URLSearchParams(window.location.search)
		if (params.has('id')) {
			const graphic = graphics.find(graphic => graphic._id === params.get('id'))

			if (graphic) {
				$open = true
				$selected_graphic = graphic
			}
		}
	}

	onMount(openGraphicFromIdParam)
	afterNavigate(openGraphicFromIdParam)
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const selected_graphic = writable(null)
</script>
