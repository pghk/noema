import hljs from 'highlight.js';

let mdConfig = {
	linkify: true,
	typographer: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return '<pre class="hljs"><code>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>';
			} catch (__) {}
		}

		return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	}
};

let mdContainers = {
	'info': {
		validate: function(params) {
			return params.trim().match(/^infobox\s+(.*)$/);
		},
		render: function (tokens, idx) {
			var m = tokens[idx].info.trim().match(/^infobox\s+(.*)$/);

			if (tokens[idx].nesting === 1) {
				// opening tag
				return `<div class="infobox ${md.utils.escapeHtml(m[1])}">\n`;

			} else {
				// closing tag
				return '</div>\n';
			}
		}
	},
	'details': {
		validate: function(params) {
			return params.trim().match(/^details\s+(.*)$/);
		},
		render: function (tokens, idx) {
			var m = tokens[idx].info.trim().match(/^details\s+(.*)$/);

			if (tokens[idx].nesting === 1) {
				// opening tag
				return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

			} else {
				// closing tag
				return '</details>\n';
			}
		}
	}
};

let md = require('markdown-it')(mdConfig)
	.use(require('markdown-it-footnote'))
	.use(require('markdown-it-sub'))
	.use(require('markdown-it-sup'))
	.use(require('markdown-it-container'), 'details', mdContainers.details)
	.use(require('markdown-it-container'), 'info', mdContainers.info);

import posts from './_posts.js';

const lookup = new Map();

export async function get(req, res, next) {
	const { slug } = req.params;
	posts().then(
		value => {
			JSON.parse(value).forEach(post => {
				post.fields.body = md.render(post.fields.body || '');
				lookup.set(post.fields.slug, JSON.stringify(post));
			});

			if (lookup.has(slug)) {
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});

				res.end(lookup.get(slug));
			} else {
				res.writeHead(404, {
					'Content-Type': 'application/json'
				});

				res.end(JSON.stringify({
					message: `Not found`
				}));
			}
		},
		reason => console.log(reason)
	);
}
