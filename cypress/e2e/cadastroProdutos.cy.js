describe('Tela de Cadastro de Produtos', () => {
  it('Deve permitir o cadastro de um novo produto', () => {
    // Visitar a página HTML (você pode alterar o caminho de acordo com o seu setup)
    cy.visit('http://127.0.0.1:8080/cadastroProdutos.html');

    // Preencher o formulário
    cy.get('#name').type('Produto Teste');
    cy.get('#price').type('99.99');
    cy.get('#quantity').type('10');

    // Submeter o formulário
    cy.get('form').submit();

    // Verificar se o alerta foi mostrado
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Produto cadastrado com sucesso!');
    });
  });
});

