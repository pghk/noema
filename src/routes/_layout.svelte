<script>
	import Nav from '../components/Nav.svelte';
	import Logotype from '../components/Logotype.svelte';

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
</style>

<Logotype />
<Nav {segment}/>

<main>
	<slot></slot>
</main>
