<script>
	export let segment;
</script>

<style>
	nav {
		@apply border-b-2;
		@apply border-solid;
		@apply border-color-light-2;
		/*@apply text-color-light-3;*/
		/*border-bottom: 1px solid rgba(41,121,255,0.1);*/
		font-weight: 300;
	}

	ul {
		width: 24rem;
		max-width: calc(100vw - 4rem);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin: 0 auto;
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
		text-align: center;
		text-transform: uppercase;
	}

	li:nth-child(1) {
		@apply text-color-info-5;
	}
	li:nth-child(2) {
		@apply text-color-success-5;
	}
	li:nth-child(3) {
		@apply text-color-warn-5;
	}
	li:nth-child(4) {
		@apply text-color-error-5;
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
		@apply bg-color-c-5;
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
		<li><a class='{segment === "foo" ? "selected" : ""}' href='foo'>work</a></li>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
	</ul>
</nav>
