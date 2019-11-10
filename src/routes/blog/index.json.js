import posts from './_posts.js';

export async function get(req, res) {
	const contents = await new Promise((resolve, reject) => {
		posts().then(
			value => resolve(JSON.parse(value).map(post => {
				return {
					title: post.fields.title,
					slug: post.fields.slug
				};
			})),
			reason => reject(reason),
		);
	});

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(contents));
}
