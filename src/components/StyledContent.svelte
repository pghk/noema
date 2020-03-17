<script>
    export let itemprop;
    export let body;

    // Anchor hash workaround - https://github.com/sveltejs/sapper/issues/904
    import { onMount } from 'svelte';
    onMount( () => {
        const footnotes = '.footnote-ref a, a.footnote-backref';
        const anchors = document.querySelectorAll( footnotes );
        anchors.forEach(a => {
            if (a.hash) {
                a.href = window.location.origin + window.location.pathname + a.hash;
            }
        });
    });
</script>

<div class="content" {itemprop}>
    {@html body}
</div>

<style global>
    .content ol {
        list-style: decimal;
    }

    .content ul {
        list-style: disc;
    }

    .content ol, .content ul {
        padding-left: var(--s2);
        margin: var(--s-1) 0;
    }

    .content li {
        margin-bottom: var(--s-1);
    }

    .hljs-number {
        color: #CC83BF;
    }
    .hljs-quote, .hljs-comment {
        color: #949CAC;
    }

    pre.hljs {
        margin: unset;
    }
    pre.hljs code {
        background: inherit;
    }

    .infobox {
        display: block;
        border: thin solid;
        @apply rounded;
        padding: 1rem;
    }

    .infobox.success {
        @apply bg-color-success-3;
        @apply border-color-success-4;
    }
    .infobox.error {
        @apply bg-color-error-3;
        @apply border-color-error-4;
    }
    .infobox.info {
        @apply bg-color-info-3;
        @apply border-color-info-4;
    }
    .infobox.warning {
        @apply bg-color-warn-3;
        @apply border-color-warn-4;
    }
    blockquote {
        display: block;
        margin-block-start: var(--s0);
        margin-block-end: var(--s0);
        margin-inline-start: var(--s1);
        margin-inline-end: var(--s1);
        border-left: solid thick;
        @apply border-color-b-3;
        padding-left: var(--s-1);
        font-style: italic;
        font-weight: 300;
        @apply text-sm;
    }

    table {
        @apply font-sans;
        margin: 0 auto;
    }
    thead {
        @apply bg-color-dark-6;
        @apply text-color-light-3;
    }
    tbody {
        @apply text-sm;
    }
    tbody tr:nth-child(odd) {
        @apply bg-color-dark-1;
    }
    td, th {
        border: solid thin;
        @apply border-color-dark-2;
        padding: var(--s-1);
    }
    .footnotes {
        margin-top: var(--s1);
        margin-bottom: var(--s0);
        @apply font-sans;
        @apply text-xs;
        column-width: 45ch;
        max-width: none;
    }
    sup.footnote-ref {
        font-variant-position: super;
        top: -0.25rem;
    }
    .footnotes ol {
        margin-top: unset;
        margin-right: auto;
        margin-left: auto;
        padding-left: var(--s1);
    }
    .footnotes li, .footnotes p {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
    }

</style>
