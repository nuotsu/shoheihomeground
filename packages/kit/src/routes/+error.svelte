<Head title="Page not found" />

<H1>
	{$page.status}
	<p slot="sub">{$page.error.message}...</p>
</H1>

<section class="section text-center">
	<h2 class="h1">
		Return to <a class="link inline-block" href="/">home base</a>.
	</h2>

	<p class="mt-4">
		Or, the <a class="link" href="/d">dugout</a> is always open for a chat.
	</p>
</section>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import { page } from '$app/stores'
</script>
