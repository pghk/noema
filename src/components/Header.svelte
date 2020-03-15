<script>
    import Logotype from "./Logotype.svelte";
</script>

<style>
     header {
        display: grid;
        grid-template-rows: 3fr 2fr;
        grid-template-columns: minmax(65vw, 90vw);
        @apply text-color-a-5;
        fill: currentColor;
        justify-self: center;
        padding: var(--s4) var(--s1) var(--s3) var(--s1);
    }
    header :global(#header-logo) {
        align-self: end;
        justify-self: center;
        max-width: calc( var(--s5) * 3.5 );
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
        max-width: none;
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
