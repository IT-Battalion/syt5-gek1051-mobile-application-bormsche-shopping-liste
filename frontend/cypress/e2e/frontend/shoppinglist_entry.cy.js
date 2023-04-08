describe('shopping list entry', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
    cy.get('#shopping_list').should('have.length.above',0)
    cy.get('#0_add').click()
  })

  it('create entry', () => {
    cy.get('#add_item_input').type('test item 123')
    cy.get('#add_item_btn').click();
    cy.get('#item_list').children().should('have.length.above', 1)
    cy.wait(500)
  })

  it('mark as bought', () => {
    cy.get('#item_list').children().should('have.length.above', 1)
    cy.get('#0_item_check').check({force:true})
    cy.get('#0_item_check').should('have.value', 'true')
    cy.wait(500)
  });

  it('mark as unbought', () => {
    cy.get('#item_list').children().should('have.length.above', 1)
    cy.get('#0_item_check').uncheck({force:true})
    cy.get('#0_item_check').should('have.value', 'false')
    cy.wait(500)
  });

  it('delete item', () => {
    cy.get('#item_list').children().should('have.length.above', 1)
    cy.get('#0_item_delete').click()
    cy.get('#item_list').children().should('have.length.below', 2)
  });

  it('create with special chars', () => {
    cy.get('#add_item_input').type("! § $ % & / ( ) = ? ` * # ~ ’ ¸ ¹ ² ³ ¼ ½ ¬ \{ \[ \] \} \\ _ : ; – … · , . - µ @ ", {parseSpecialCharSequences: false})
    cy.get('#add_item_btn').click();
    cy.get('#item_list').children().should('have.length.above', 1)
    cy.wait(1000)
  });

  it('shows Detail for item', () => {
    cy.get('#0_item_det').click();
    cy.wait(1000);
    cy.get('#close_detail').click();
    cy.get('#0_item_delete').click()
    cy.get('#item_list').children().should('have.length.below', 2)
  });
})