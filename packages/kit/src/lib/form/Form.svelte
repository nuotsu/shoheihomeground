
{#if !submitted}
	<form {name}
		method="post"
		data-netlify="true"
		netlify-honeypot="bot-field"
		on:submit|preventDefault={onSubmit}
	>
		<input name="form-name" value={name} type="hidden" />
		<input name="bot-field" type="hidden" />

		<slot></slot>
	</form>

{:else}
	<slot name="success">
		<p class="text-center font-bold mt-4">
			Thanks for submitting!
			We'll be in contact soon.
		</p>
	</slot>
{/if}

<script>
	export let name

	let submitted = false

	function onSubmit({ target }) {
		let formData = new FormData(target)

		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(formData).toString()
		})
		.then(() => {
			submitted = true
		})
		.catch(error => alert(error))
	}
</script>
