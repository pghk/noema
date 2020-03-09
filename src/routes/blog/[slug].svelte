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
	.blog-post :global(ol) {
		list-style: decimal;
	}

	.blog-post :global(ul) {
		list-style: disc;
	}

	.blog-post :global(ol), .blog-post :global(ul) {
		margin-top: 1rem;
		padding-left: 2rem;
	}

	.blog-post :global(li) {
		margin: 0 0 0.5em 0;
	}

	:global(.hljs-number) {
		color: #CC83BF;
	}
	:global(.hljs-quote), :global(.hljs-comment) {
		color: #949CAC;
	}

	:global(pre.hljs) {
		margin: unset;
	}
	:global(pre.hljs code) {
		background: inherit;
	}
</style>

<svelte:head>
	<title>{post.fields.title}</title>
	<meta name="Description" content="Todo: add this field to the blog table">
</svelte:head>

<article class="blog-post" itemscope itemtype="https://schema.org/BlogPosting">
	<h1 itemprop="name">{post.fields.title}</h1>
	<div class="post-body" itemprop="articleBody">
		{@html post.fields.body}
	</div>
</article>
