const filePath = 'data/posts.json';
let fs = require('fs');
let md = require('markdown-it')('commonmark');

export default async () => {
	return await new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	});
};
