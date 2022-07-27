<section>
	<h1 class="h0">Shohei Home Ground</h1>
	<p>High quality photographs of two-way two-time All Star</p>

	<dl>
		<div>
			<dt>{total_count.toLocaleString()}</dt>
			<dd>photos</dd>
		</div>
		<div>
			<dt>{total_days.toLocaleString()}</dt>
			<dd>days</dd>
		</div>
	</dl>
</section>

<style>
	section {
		padding: 1rem;
		background-color: #000;
		color: #fff;
	}

	dl {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		text-align: center;
	}

	dt {
		font-weight: bold;
	}
</style>

<script>
	import { total_count, total_days } from '../data/images-metadata.json'
</script>
