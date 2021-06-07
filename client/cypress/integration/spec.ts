describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('it should have defined contents', () => {
    cy.contains('Clubs Finder App');
    cy.contains('Search for a football club');
  });
  it('should click on select', () => {
    cy.get('[data-cy=club-input]').first()
      .click();
    cy.get('[data-cy=option-button]')
      .contains('Fortaleza Esporte Club');

    cy.get('[data-cy=club-input]')
      .click()
      .focused()
      .type('Sociedade');

    cy.get('[data-cy=option-button]')
      .contains('Sociedade Esportiva Palmeiras');

    cy.get('[data-cy=option-button]').click();
    cy.get('.example-header-image')
      .should('have.css', 'background-image');

    cy.get('[data-cy=club-name]')
      .contains('Sociedade Esportiva Palmeiras');

    cy.get('[data-cy=club-short-details]')
      .contains('SEP - Brazil');

    cy.get('.stadium-image')
      .should('have.css', 'background-image');

    cy.get('.club-name')
      .contains('Club: Sociedade Esportiva Palmeiras');

    cy.get('.club-country')
      .contains('Country: Brazil')

    cy.get('.club-stadium-name')
      .contains('Stadium: Allianz Parque')

    cy.get('.club-stadium-capacity')
      .contains('Stadium capacity: 55000')

    cy.get('.club-stadium-address')
      .contains('Stadium address: Av. Francisco Matarazzo, 1705 - Água Branca, São Paulo - SP, 05001-200, Brasil')
  })
})
