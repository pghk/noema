<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
	import Footer from "../components/Footer.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		width: max-content;
		max-width: calc(100vw - var(--s1));
		justify-self: center;
		margin-top: var(--s1);
		margin-bottom: var(--s2);
	}
</style>

<Header />
<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />
