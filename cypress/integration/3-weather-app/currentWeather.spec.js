import { HOME_PAGE, CURRENT_WEATHER_PAGE, DAILY_FORECAST_PAGE, SERVER_URL } from '../../../src/Config/constants';
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe('general test', () => {
    beforeEach('start', () => {
        cy.intercept('GET', '**/weather?q=warsaw*', { fixture: 'weather.json' });
        cy.intercept('GET', '**/weather?lat=52*', { fixture: 'weatherGeo.json' });
        cy.intercept('GET', '**/weather?q=dubai*', { fixture: 'weatherSearch.json' });
        cy.intercept('GET', '**/weather?lat=25*', { fixture: 'weatherGeoSearch.json' });
        cy.intercept('GET', '**/onecall?lat=52*', { fixture: 'weatherDaily.json' });
        cy.intercept('GET', '**/onecall?lat=25*', { fixture: 'weatherDaily.json' });
        cy.intercept('GET', '**/maps?*', { fixture: '' });
    });
    it.only('should "footer" work', () => {
        cy.visit(`${SERVER_URL}`);
        cy.get('footer')
            .children('p')
            .each(($el) => {
                cy.wrap($el).should(($el) => {
                    expect($el.text()).not.equal('');
                    expect($el).to.be.visible;
                });
            });
    });

    it.only('should "nav" work', () => {
        cy.visit(`${SERVER_URL}`);
        cy.get('nav').find('a').should('have.length', 3).and('be.visible');

        cy.get('nav').find(`a[href="${DAILY_FORECAST_PAGE}"]`).should('be.visible').click();

        cy.contains('details');

        cy.get('nav').find(`a[href="${CURRENT_WEATHER_PAGE}"]`).should('be.visible').click();

        cy.contains('sunrise');

        cy.get('nav').find(`a[href="${HOME_PAGE}"]`).should('be.visible').click();

        cy.get('h1').contains('Page');
    });

    it.only('should "home page" work', () => {
        cy.visit(`${SERVER_URL}`);
        cy.get('main').find('div[class="home__card"]').should('have.length', 2).and('be.visible');

        cy.get('div[class="home__card"]').children(`a[href="${CURRENT_WEATHER_PAGE}"]`).should('be.visible').click();

        cy.contains('sunrise').visit(`${SERVER_URL}${HOME_PAGE}`);

        cy.get('div[class="home__card"]').children(`a[href="${DAILY_FORECAST_PAGE}"]`).should('be.visible').click();

        cy.contains('details').visit(`${SERVER_URL}${HOME_PAGE}`);
    });

    it.only('should "current weather page" work ', () => {
        cy.visit(`${SERVER_URL}${CURRENT_WEATHER_PAGE}`);

        cy.get('main[class="details"]').children('p').should('have.length', 5).and('be.visible');

        cy.get('main[class="details"]')
            .children('h1')
            .should('have.length', 1)
            .and('be.visible')
            .and(($el) => {
                expect($el.text()).not.equal('');
            });

        cy.get('main[class="details"]')
            .find('h1')
            .should(($el) => {
                expect($el.text()).equal('Warsaw');
            });

        cy.get('input').type('dubai');

        cy.get('main[class="details"]')
            .find('h1')
            .should(($el) => expect($el.text()).equal('Dubai'))
            .and('be.visible');

        cy.get('main[class="details"]').children('p').should('have.length', 5).and('be.visible');

        cy.get('iframe[title="google Map"]').should('be.visible');
    });

    it.only('should "daily weather page" work', () => {
        cy.visit(`${SERVER_URL}${DAILY_FORECAST_PAGE}`);

        Cypress.Commands.add('clickCollapse', () => {
            cy.get('div[class="table"]').children('div[class="table__row"]').first().find('button').click();

            cy.get('div[class="collapse"]').children('p').should('be.visible');

            cy.get('div[class="table"]').children('div[class="table__row"]').first().find('button').click();
        });

        cy.get('main[class="daily"]')
            .children('h1')
            .should('have.length', 1)
            .and('be.visible')
            .and(($el) => expect($el.text().trim()).equal('Warsaw'));

        cy.clickCollapse();

        cy.get('input').type('dubai');

        cy.get('main[class="daily"]')
            .children('h1')
            .should('have.length', 1)
            .and('be.visible')
            .and(($el) => {
                expect($el.text()).equal('Dubai');
            });

        cy.clickCollapse();
    });

    it.only('should "404 page" work', () => {
        cy.visit(`${SERVER_URL}/wrong link`);

        cy.get('main').children().should('have.length', 2).and('be.visible');

        cy.visit(`${SERVER_URL}`);
    });
});
