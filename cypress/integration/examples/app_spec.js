describe('App tests', () => {
  it('test filters', () =>{
    cy.visit('http://localhost:3000');
    cy.wait(2000);
    cy.get('button').contains('Показать готовые').click();
    cy.get('.chapter-title').should('have.length', 1);
    cy.get('.sub-chapter').should('have.length', 1);
    cy.get('button').contains('Показать не готовые').click();
    cy.get('.chapter-title').should('have.length', 2);
    cy.get('.sub-chapter').should('have.length', 3);
  });
  it('test auto complete chapter', () => {
    cy.visit('http://localhost:3000')
    cy.wait(2000);
    cy.get('#subChapter-3').type('новая подглава 2');
    cy.get('#subChapter-add-3').click();
    cy.get('.chapter-title').contains('Глава 3').prev('input').should('be.not.checked');
    cy.get('.sub-chapter').contains('новая подглава 2').find('input').click();
    cy.get('.chapter-title').contains('Глава 3').prev('input').should('be.checked');
  })
  it('Visit a mainpage', () => {
    cy.visit('http://localhost:3000')
    cy.wait(2000);
    cy.contains('Содержание книги');
    cy.get('#chapter').type('Глава 4').should('have.value', 'Глава 4');
    cy.contains('Добавить Главу').click();
    cy.get('.sub-chapter-list').last().find('input').type('Подглава 1').should('have.value', 'Подглава 1');
    cy.get('.sub-chapter-list').last().find('button').click();
    cy.contains('Глава 4');
    cy.contains('Подглава 1');
    cy.get('.sub-chapter').should('have.length', 5);
    cy.get('.chapter-title').should('have.length', 4);
  });
  
});