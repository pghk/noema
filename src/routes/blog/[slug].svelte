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
		padding-left: var(--s2);
		margin: var(--s-1) 0;
	}

	.blog-post :global(li) {
		margin-bottom: var(--s-1);
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

	:global(.infobox) {
		display: block;
		border: thin solid;
		@apply rounded;
		padding: 1rem;
	}

	:global(.infobox.success) {
		@apply bg-color-success-3;
		@apply border-color-success-4;
	}
	:global(.infobox.error) {
		@apply bg-color-error-3;
		@apply border-color-error-4;
	}
	:global(.infobox.info) {
		@apply bg-color-info-3;
		@apply border-color-info-4;
	}
	:global(.infobox.warning) {
		@apply bg-color-warn-3;
		@apply border-color-warn-4;
	}
	:global(blockquote) {
		display: block;
		margin-block-start: var(--s0);
		margin-block-end: var(--s0);
		margin-inline-start: var(--s1);
		margin-inline-end: var(--s1);
		border-left: solid thick;
		@apply border-color-b-3;
		padding-left: var(--s-1);
		font-style: italic;
		font-weight: 300;
		@apply text-sm;
	}

	:global(table) {
		@apply font-sans;
		margin: 0 auto;
	}
	:global(thead) {
		@apply bg-color-dark-6;
		@apply text-color-light-3;
	}
	:global(tbody) {
		@apply text-sm;
	}
	:global(tbody) :global(tr:nth-child(odd)) {
		@apply bg-color-dark-1;
	}
	:global(td), :global(th) {
		border: solid thin;
		@apply border-color-dark-2;
		padding: var(--s-1);
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
