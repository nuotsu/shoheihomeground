<aside class="fixed z-[1] left-0 bottom-4 md:ml-4 glass drop-shadow-lg rounded <md:rounded-l-none">
	<details class="text-sm">
		<summary class="with-icon py-2 px-4">
			Table of Contents
			<span class="transition-transform"><Right /></span>
		</summary>

		<nav class="p-4 pt-0">
			<ol class="list-decimal pl-[1.5em]">
				<slot></slot>
			</ol>
		</nav>
	</details>
</aside>

<style>
	details[open] summary {
		font-weight: bold;
	}

	details[open] span {
		transform: rotate(0.25turn);
	}
</style>

<script>
	import Right from '$icon/Right.svelte'
</script>
