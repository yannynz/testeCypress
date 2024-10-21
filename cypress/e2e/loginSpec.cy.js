describe('template spec', () => {
  it('passes', () => {
cy.visit('http://172.20.10.5:8080/web-test/login.html')
cy.get('#loginEmail').type('teste@gmail.com')  
cy.get('#loginPassword').type('123456')
      cy.get('.btn').click()


  })
})
