describe('shopping list tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('create entry', () => {
      cy.get('#add_entry').click();
      cy.get('#list_name').type('Food');
      cy.get('#place_name').type('Whole Foods')
      cy.get('#lookup').click()
      //cy.get('#places').select(1)
      //TODO: do the stuff to create a list
      cy.get('#create_shopping_list').click()
  });
})