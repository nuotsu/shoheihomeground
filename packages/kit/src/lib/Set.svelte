{num(set)}

<script>
	export let set
</script>

<script context="module">
	export function num(set) {
		return String(set + 1).padStart(2, '0')
	}
</script>
