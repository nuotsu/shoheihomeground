<fieldset class={className}>
	<legend class="font-bold">{title}</legend>

	<div class={contentClass}>
		<slot></slot>
	</div>
</fieldset>

<script>
	export let title, className, contentClass
</script>
