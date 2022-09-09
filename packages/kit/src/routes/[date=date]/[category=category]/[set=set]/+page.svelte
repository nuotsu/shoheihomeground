<Head title="{category.name} — {format(date)}" />

<H1>
	<a class="link-hover" href="/{category.code}">
		{category.name}
	</a>

	<p slot="sub">
		Photoset {set}
		{#if title}"{title}"{/if}
		—
		<a class="link-hover" href="/{date}">
			<Date {date} />
		</a>
	</p>
</H1>

<article class="section md:py-20 grid gap-8 items-center <md:px-0">
	{#each photos as photo}
		<figure class="m-auto">
			<button
				class="inline-block highlight chiseled"
				on:click={() => openModal({ photo, category, set, date })}
			>
				<Img image={photo} w={500} />
			</button>
		</figure>
	{/each}
</article>

<Modal>
	<ModalPhoto {...selected_photo} />
</Modal>

<style>
	article {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Date, { format } from '$lib/Date.svelte'
	import Img from '$lib/Img.svelte'
	import Modal, { open } from '$lib/modal/Modal.svelte'
	import ModalPhoto from '$lib/modal/ModalPhoto.svelte'
	import { onMount } from 'svelte'
	import { afterNavigate } from '$app/navigation'
	import { page } from '$app/stores'

	export let data

	const { category, categories } = data
	const { date, set } = $page.params

	const { photos, title } = categories
		.find(c => c.category.code === category.code)
		.photosets[set - 1]

	let selected_photo = null

	function openModal(props) {
		$open = true
		selected_photo = props
	}

	function openPhotoFromIdParam() {
		const params = new URLSearchParams(window.location.search)
		if (params.has('key')) {
			const photo = photos.find(photo => photo._key === params.get('key'))

			if (photo) {
				$open = true
				selected_photo = ({ photo, category, set, date })
			}
		}
	}

	onMount(openPhotoFromIdParam)
	afterNavigate(openPhotoFromIdParam)
</script>
