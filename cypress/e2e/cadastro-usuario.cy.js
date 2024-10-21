function gerarStringAleatoria(tamanho) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indice];
  }
  
  return resultado;
}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://172.20.10.5:8080/web-test/cadastro.html')
      const nome = `${gerarStringAleatoria(5)}`;
      const email = `${nome}@fiap.com.br`;
      const senha = `${gerarStringAleatoria(5)}`;
      cy.get('#registerName').type(nome)
      cy.get('#registerEmail').type(email)
      cy.get('#registerPassword').type(senha)
      cy.get('.btn').click()
  })
})
