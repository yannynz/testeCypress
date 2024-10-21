describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://172.20.10.5:8080/web-test/')
      cy.get('#BemVindo').should('contain', 'Bem-vindo!')
  })
})
