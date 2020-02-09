<script>
	import Nav from '../components/Nav.svelte';
	import Logotype from '../components/Logotype.svelte';
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

<Logotype />
<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />
