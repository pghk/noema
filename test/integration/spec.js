describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Hello!')
	});

	it('navigates to /about', () => {
		cy.get('nav a[title=About]').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /blog', () => {
		cy.get('nav a[title="Blog"]').click();
		cy.url().should('include', '/blog');
	});
});
