<label class="py-[0.25em]" for={name}>
	<slot>{label}</slot>{#if required}*{/if}
</label>

<input class="input" id={name} {name} {type} placeholder={label} {required} {...$$props} />

<script>
	export let label, name, type = 'text', required = null
</script>
