<script>
    import Logotype from "./Logotype.svelte";
</script>

<style>
     header {
        height: 100%;
        display: grid;
        grid-template-rows: 3fr 2fr;
        @apply text-color-a-5;
        fill: currentColor;
        align-self: center;
        justify-self: center;
        margin: 0 2rem 1rem 2rem;
        max-width: 42rem;
    }
    header :global(#header-logo) {
        align-self: end;
    }
    .tagline {
        align-self: center;
        text-align: center;
        @apply font-sans;
        font-weight: 400;
        font-variant: small-caps;
        text-transform: uppercase;
        letter-spacing: 1.5vw;
        @apply text-xs;
    }

    .tagline::before {
        content: '~ ';
    }
    .tagline::after {
        content: ' ~';
    }

</style>

<header>
    <Logotype idPrefix={'header'} colorDesc="Dark blue"/>
    <p class="tagline">Fine Web Developments</p>
</header>
