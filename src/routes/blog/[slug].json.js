let mdConfig = {
	html: true,
	linkify: true,
	typographer: true,
};

let mdContainers = {
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
	.use(require('markdown-it-container'), 'details', mdContainers.details);


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
