<label class="py-[0.25em]" for={name}>
	<slot>{label}</slot>{#if required}*{/if}
</label>

<textarea class="input" id={name} {name} placeholder={label} {required} {...$$props} />

<script>
	export let label, name, required = null
</script>
