describe('shoppinglist entry', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('create entry', () => {
      cy.get('#add_entry').click();
      cy.get('#list_name').type('Food');
      cy.get('#place_name').type('Whole Foods')
      cy.get('#lookup').click()
      cy.get('#places').select()
  });
})