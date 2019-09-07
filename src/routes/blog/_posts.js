let md = require('markdown-it')('commonmark');

let posts = [
	{
		'title': 'Okay this should work now',
		'slug': 'okay-this-should-work',
		'markdown': `
			Lorem markdownum praedone papilione est nato polumque coniunctaque quod
			Aesoniden.
			
			> Liquidas nostros gener Veneris tamen dolor amat auras! Magna et inquit terret
			> modo terras repugnat acui portans diversa nos aptius ferre, cum placida.
			
			A flores, alatur resonare ut iunxit et canibus, cecidit arbore solet?
			Apro duxisses virga favorem hanc coniunx [virgine potest](http://ducem-iter.net/interea.html).
			Per cui Nam hoc Cephisius noverca.
			
			1. Armis et qua origine plus late
			2. Modo dumque venandi nitar revocantis prensam tellus
			3. Os membra somnus
			
			## Qua cruentas
			
			Induit aere erat fratrem natas. Idaeo omnis carpsere flores de integer peperisse
			dictis. Esse data contractosque [tuum terras
			sponte](http://ducem-iter.net/interea.html) et *statione rogat* irasci
			spectatae. Capillos telum tua adfore, mirum corporis demissam cedemus audentes
			iuvenes alma vires audit mactatur.
		`
	}
];

posts.forEach(post => {
	post.html = md.render(post.markdown.replace(/^\t{3}/gm, ''));
});

export default posts;
