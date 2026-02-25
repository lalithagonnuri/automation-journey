/// <reference types="cypress" />

describe('Test Suite', () => {
  it('should do something', () => {
    // test code here
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept({
      path: '/posts'
    }).as('posts');

    // NOTE: jsonplaceholder homepage is raw JSON, not a table.
    // This selector may not exist, but we'll keep it as you want.
    cy.get("table:nth-of-type(1) a[href='/posts']").click({ force: true });

    cy.wait('@posts').then(inter => {
      cy.log(JSON.stringify(inter));
      console.log(JSON.stringify(inter));
    });
  });

  it.only('should do somethinkkg', () => {
    // test code here
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept('GET', '/posts', { fixtures:'example.json' }).as('posts');

    // If you want to actually trigger the request, uncomment below:
     cy.request('/posts');

    // If you want to validate the stubbed response, uncomment below:
    cy.wait('@posts')
  });
  it.only('should do sohy', () => {
    // test code here
    cy.intercept('/activities/*', { fixture: 'activities' }).as('getActivities')
cy.intercept('/messages/*', { fixture: 'messages' }).as('getMessages')

// visiting the dashboard should make requests that match
// the two routes above
cy.visit('http://localhost:8888/dashboard')

// pass an array of Route Aliases that forces Cypress to wait
// until it sees a response for each request that matches
// each of these aliases
cy.wait(['@getActivities', '@getMessages'])

// these commands will not run until the wait command resolves above
cy.get('h1').should('contain', 'Dashboard')
  });
  
});
