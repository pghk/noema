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
    display: grid;
  }

  ul {
    width: 24rem;
    max-width: calc(100vw - 4rem);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-self: center;
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
    padding: 0 var(--s-2);
    display: inline-block;
    color: inherit;
    background-repeat: no-repeat;
    background-position: center;
  }

  a span {
    opacity: 0;
    display: block;
    position: relative;
    top: .1rem;
    transition: all .1s ease-in-out;
  }

  a:hover span, a[aria-current] span  {
    opacity: 1;
  }

  a svg {
    height: 1rem;
    display: inline-block;
    position: relative;
    top: -1.6rem;
    opacity: 1;
    transition: all .1s ease-in-out;
  }

  a:hover svg, a[aria-current] svg {
    opacity: 0;
  }
</style>

<nav>
  <ul>
    <li><a title="Home" aria-label="Home" aria-current='{segment === undefined ? "page" : undefined}' href='.'>
      <span>home</span>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas"
           class="svg-inline--fa fa-globe-americas fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 496 512" style="width: 1rem">
        <path fill="currentColor"
              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path>
      </svg>
    </a></li>
    <li><a title="About" aria-label="About" aria-current='{segment === "about" ? "page" : undefined}' href='about'>
      <span>about</span>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="address-card"
           class="svg-inline--fa fa-address-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 576 512" style="width: 1rem">
        <path fill="currentColor"
              d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path>
      </svg>
    </a></li>
    <li><a title="Work" aria-label="Work" aria-current='{segment === "work" ? "page" : undefined}' href='wont-work'>
      <span>work</span>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code"
           class="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
           style="width: 1rem">
        <path fill="currentColor"
              d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
      </svg>
    </a></li>
    <li><a rel=prefetch title="Blog" aria-label="Blog" aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>
      <span>blog</span>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="signature"
           class="svg-inline--fa fa-signature fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 640 512" style="width: 1rem">
        <path fill="currentColor"
              d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"></path>
      </svg>
    </a></li>
  </ul>
</nav>
