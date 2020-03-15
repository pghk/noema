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

<style global>
	.blog-post ol {
		list-style: decimal;
	}

	.blog-post ul {
		list-style: disc;
	}

	.blog-post ol, .blog-post ul {
		padding-left: var(--s2);
		margin: var(--s-1) 0;
	}

	.blog-post li {
		margin-bottom: var(--s-1);
	}

	.hljs-number {
		color: #CC83BF;
	}
	.hljs-quote, .hljs-comment {
		color: #949CAC;
	}

	pre.hljs {
		margin: unset;
	}
	pre.hljs code {
		background: inherit;
	}

	.infobox {
		display: block;
		border: thin solid;
		@apply rounded;
		padding: 1rem;
	}

	.infobox.success {
		@apply bg-color-success-3;
		@apply border-color-success-4;
	}
	.infobox.error {
		@apply bg-color-error-3;
		@apply border-color-error-4;
	}
	.infobox.info {
		@apply bg-color-info-3;
		@apply border-color-info-4;
	}
	.infobox.warning {
		@apply bg-color-warn-3;
		@apply border-color-warn-4;
	}
	blockquote {
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

	table {
		@apply font-sans;
		margin: 0 auto;
	}
	thead {
		@apply bg-color-dark-6;
		@apply text-color-light-3;
	}
	tbody {
		@apply text-sm;
	}
	tbody tr:nth-child(odd) {
		@apply bg-color-dark-1;
	}
	td, th {
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
