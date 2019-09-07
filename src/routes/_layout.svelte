<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Header />
<Nav {segment}/>

<main>
	<slot></slot>
</main>
