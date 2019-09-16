<script>
	export let segment;
</script>

<style>
	nav {
		@apply border-b-2;
		@apply border-solid;
		@apply border-color-a-1;
		@apply text-color-a-5;
		/*border-bottom: 1px solid rgba(41,121,255,0.1);*/
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		justify-content: right;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		@apply font-sans;
		display: block;
		float: left;
		text-transform: uppercase;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		@apply bg-color-b-5;
		/*background-color: rgb(41,121,255);*/
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: inherit;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
	</ul>
</nav>
