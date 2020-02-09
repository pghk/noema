<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
	import Footer from "../components/Footer.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		width: 100%;
		max-width: 56em;
		justify-self: center;
		padding: 2em;
		box-sizing: border-box;
	}
	footer {
		justify-self: end;
	}
</style>

<Header />
<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />
