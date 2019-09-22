<script>
	export let segment;

	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

</script>

<style>
	nav {
		font-weight: 300;
		/* background stroke is color-light-4: #C6C8DB */
		background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg"><path d="M0 3 H 100" fill="none" stroke="%23C6C8DB" stroke-width=".1px"/></svg>');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
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

	a {
        @apply bg-color-light-1;
		text-decoration: none;
		padding: 1em;
		display: inline-block;
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
