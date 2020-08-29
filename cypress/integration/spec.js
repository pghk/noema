describe('Blank slate', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has a boring title', () => {
		cy.title().should('eq', 'Blank slate')
	});

});