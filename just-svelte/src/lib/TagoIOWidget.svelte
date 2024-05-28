<script lang="ts">
	import { onMount } from "svelte";

	let message = "Initializing...";

	onMount(() => {
		window.TagoIO.ready();

		window.TagoIO.onStart((widget: any) => {
			message = "TagoIO Widget Initialized";
		});

		window.TagoIO.onRealtime((data: any) => {
			message = "Received Realtime Data";
		});
	});
</script>

<main>
	<div>{message}</div>
</main>

<style>
	main {
		font-family: Arial, sans-serif;
		text-align: center;
		padding: 1rem;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
</style>
