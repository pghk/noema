<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>

	h1 {
		@apply text-color-error-5;
		@apply text-6xl;
		font-variation-settings: 'wght' 900;
	}

	h1, p {
		@apply font-mono;
		text-align: center;
	}
	pre {
		margin: var(--s0) auto;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre><code>{error.stack}</code></pre>
{/if}
