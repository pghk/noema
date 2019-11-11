<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ol) {
		list-style: decimal;
	}

	.content :global(ul) {
		list-style: disc;
	}

	.content :global(ol),:global(ul) {
		margin-top: 1rem;
		padding-left: 2rem;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.fields.title}</title>
	<meta name="Description" content="Todo: add this field to the blog table">
</svelte:head>

<h1>{post.fields.title}</h1>

<div class='content'>
	{@html post.fields.body}
</div>
