<section id="contact" class="section">
	<header class="grid gap-2 text-center">
		<h2 class="h1">Contact Form</h2>
		<p>Feel free to reach out about photograph inquiries/requests or questions.</p>
		<p lang="ja">日本語でのお問い合わせも可能です！</p>
	</header>

	<Form className="form max-w-lg mx-auto mt-8" name="contact">
		<Input name="name" label="Name" placeholder="Shohei Ohtani" required />
		<Input name="email" label="Email" type="email" placeholder="shotime@angels.com" required />
		<Input name="tel" label="Tel" placeholder="(000) 000-0000" />
		<Textarea
			name="message"
			label="Message"
			placeholder="Please take our family photo in front of Angels Stadium!"
			rows={3}
			required
		/>

		<button class="action col-span-full">Submit</button>
	</Form>
</section>

<style>
	section :global(.form) {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1ch;
	}
</style>

<script>
	import { Form, Input, Textarea } from '$lib/form'
</script>
