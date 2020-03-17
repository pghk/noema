import md from '../../renderers/markdown'
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
