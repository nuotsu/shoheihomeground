{#each byMonth as [month, dates], index}
	<dl class="min-w-[12ch] <md:text-center" hidden={active !== index}>
		<dt class="flex gap-2 items-center justify-between mb-2">
			<button class="prev" on:click={prev} disabled={active === 0}>
				<Right />
			</button>

			{month}

			<button on:click={next} disabled={active === byMonth.length - 1}>
				<Right/>
			</button>
		</dt>

		{#each dates as date}
			<dd>
				<a class="link-hover" href="/{date}">
					<Date {date} />
				</a>
			</dd>
		{/each}
	</dl>
{/each}

<style>
	[disabled] {
		opacity: 0.2;
	}

	button {
		display: grid;
		place-content: center;
	}

	dd {
		animation: appear 0.2s ease-in-out;
	}

	@keyframes appear {
		from {
			opacity: 0;
			translate: -0.5rem 0;
		}
	}

	.prev {
		scale: -1 1;
	}
</style>

<script>
	import { groupBy } from 'lodash-es'
	import Date, { format } from '$lib/Date.svelte'
	import Right from '$icon/Right.svelte'
	import { page } from '$app/stores'

	const { dates } = $page.data.sanity
	const byMonth = Object.entries(groupBy(dates, date => format(date, { month: 'long' })))

	let active = 0

	function prev() {
		active = Math.max(0, active - 1)
	}

	function next() {
		active = Math.min(byMonth.length - 1, active + 1)
	}
</script>
