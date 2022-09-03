<Head
	title="Contact"
	description="Contact for photo inquiries to be taken at Angels Stadium."
/>

<H1>Contact</H1>

<section class="section">
	<header class="text-center">
		<h2 class="h1">Contact form</h2>
		<p class="mt-2">Feel free to contact about inquiries, photograph requests, or ask a question!</p>
	</header>

	<Form name="contact">
		<label for="name">Name*</label>
		<input class="chiseled" id="name" name="name" placeholder="Shohei Ohtani" type="text" autocomplete="name" required />

		<label for="email">Email*</label>
		<input class="chiseled" id="email" name="email" placeholder="shotime@angels.com" type="email" autocomplete="email" required />

		<label for="tel">Tel</label>
		<input class="chiseled" id="tel" name="tel" type="text" autocomplete="tel" />

		<label for="message">Message*</label>
		<textarea
			class="chiseled"
			id="message"
			name="message"
			rows="4"
			placeholder="Please take a family photo of us in front of Angels Stadium!"
			required
		/>

		<p class="col-span-full text-center">
			<button class="action w-full" type="submit">Submit</button>
		</p>
	</Form>
</section>

<style>
	section :global(form) {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
		margin-top: 2rem;

		@apply max-w-md mx-auto;
	}

	label {
		padding-block: 0.25em;
	}

	input,
	textarea {
		padding: 0.25em 0.5em;

		@apply bg-ink/10;
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Form from '$lib/form/Form.svelte'
</script>
