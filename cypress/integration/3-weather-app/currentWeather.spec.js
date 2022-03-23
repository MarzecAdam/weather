/* eslint-disable no-undef */
describe('something', () => {
    beforeEach('start', () => {
        cy.intercept('GET', '**/weather?q*', { fixture: 'weather.json' });
        cy.intercept('GET', '**/weather?lat*', { fixture: 'weatherGeo.json' });
        cy.intercept('GET', '**/onecall?*', { fixture: 'weatherDaily.json' });
        cy.visit('localhost:3000');
    });

    it('should home page work', () => {
        cy.get('main').find('div[class="home__card"]').should('have.length', 2).and('be.visible');

        cy.get('nav[class="header"]').find('a[class="header__link"]').should('have.length', 3).and('be.visible');

        cy.get('div[class="home__card"]').children('a[href="/weather"]').should('be.visible').click();

        cy.contains('sunrise').get('nav').find('a[href="/home"]').click();

        cy.get('div[class="home__card"]').children('a[href="/daily"]').should('be.visible').click();

        cy.contains('details').get('nav').find('a[href="/home"]').click();

        cy.get('nav[class="header"]').children('a[href="/daily"]').should('be.visible').click();

        cy.contains('details').get('nav').find('a[href="/home"]').click();

        cy.get('nav[class="header"]').children('a[href="/weather"]').should('be.visible').click();

        cy.contains('sunrise').get('nav').find('a[href="/home"]').click();
    });
});
