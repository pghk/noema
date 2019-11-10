<script>
	import Nav from '../components/Nav.svelte';
	import Logotype from '../components/Logotype.svelte';

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

<Logotype />
<Nav {segment}/>

<main>
	<slot></slot>
</main>
