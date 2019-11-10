const tailwindcss = require("tailwindcss");

const purge = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", "./public/**/*.html"],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const minify = require('cssnano')({
    preset: 'default',
});

module.exports = {
    plugins: [
        tailwindcss("./tailwind.js"),
        ...(process.env.NODE_ENV === "production" ? [purge, minify] : [])
    ]
};
