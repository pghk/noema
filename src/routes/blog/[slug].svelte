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
	import StyledContent from '../../components/StyledContent.svelte'
	export let post;
</script>

<svelte:head>
	<title>{post.fields.title}</title>
	<meta name="Description" content="Todo: add this field to the blog table">
</svelte:head>

<article class="blog-post" itemscope itemtype="https://schema.org/BlogPosting">
	<h1 itemprop="name">{post.fields.title}</h1>
	<StyledContent body={post.fields.body} itemprop="articleBody"/>
</article>
