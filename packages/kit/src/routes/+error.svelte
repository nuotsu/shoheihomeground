<Head title="Page not found" />

<H1>
	{$page.status}
	<p slot="sub">{$page.error.message}...</p>
</H1>

<section class="section">
	<p>Return <a class="link" href="/">home</a>.</p>
</section>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import { page } from '$app/stores'
</script>
