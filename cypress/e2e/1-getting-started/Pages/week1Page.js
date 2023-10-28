class week1obj{
contactbutton(){
    cy.get('.justify-content-end > .btn').click()
    cy.get('[class="row form-wrapper"]').should('exist')
      cy.get('input[name="Firstname"]')
      cy.get(':nth-child(1) > .me-3').check()
      cy.get('[type="checkbox"][value="videoEditing"]').check()
      cy.get('[placeholder="Write your Message"]').type("I will like to contact you. I'll like to know when the class will start")
      // cy.get('.btn-primary').click() 
}
buttonClick (){
  cy.get('.btn-primary').click()
}

}
export default  new week1obj