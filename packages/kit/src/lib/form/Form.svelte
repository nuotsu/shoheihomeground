<form {name} method="post" data-netlify="true" netlify-honeypot="bot-field" class={className}>
	<input name="form-name" value={name} type="hidden" />

	<slot></slot>
</form>

<script>
	export let name, className
</script>
