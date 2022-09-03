<Head title="{category.name} — {format(date)}" />

<H1>
	<a class="link-hover" href="/{category.code}">
		{category.name}
	</a>

	<p slot="sub">
		Photoset {set}
		—
		<a class="link-hover" href="/{date}">
			<Date {date} />
		</a>
	</p>
</H1>

<article class="section md:py-20 grid gap-8 items-center <md:px-0">
	{#each photos as photo}
		{@const alt = [category.name, format(date), `Photoset ${set}`].join(', ')}

		<figure class="m-auto">
			<button
				class="inline-block highlight chiseled"
				on:click={() => openModal({ photo, category, set, date, alt })}
			>
				<Img image={photo} w={500} {alt} />
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
	import { page } from '$app/stores'

	export let data

	const { category, categories } = data
	const { date, set } = $page.params

	const { photos } = categories
		.find(c => c.category.code === category.code)
		.photosets[set - 1]

	let selected_photo = null

	function openModal(props) {
		$open = true
		selected_photo = props
	}
</script>
