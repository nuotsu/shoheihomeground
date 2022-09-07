<label class:disabled>
	<input {name} {value} bind:checked={checked} type="checkbox" />
	<slot></slot>
</label>

<style>
	label {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 0.5ch;
	}

	.disabled {
		text-decoration: line-through;
		@apply text-ink/50;
	}
</style>

<script>
	export let name, value, checked = null, disabled
</script>
