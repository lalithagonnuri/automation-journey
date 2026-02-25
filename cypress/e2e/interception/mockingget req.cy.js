// cypress/e2e/mock_get_request.cy.js

describe('Mocking a GET request with intercept()', () => {

  it('should intercept the GET request and return mocked data', () => {
    // Intercept the GET request and mock the response
    cy.intercept('GET', '/api/data', {
      statusCode: 200,
      body: {
        message: 'Mocked Data',
        items: ['Item 1', 'Item 2', 'Item 3']
      }
    }).as('getData');
    cy.visit('http://localhost:3000'); // app triggers fetch('/api/data')
cy.wait('@getData');
cy.get('#apiData').should('contain.text', 'Mocked Data');

    // Trigger the request directly using cy.request()
    // cy.request('/api/data').then((response) => {
    //   // Assert the mocked response
    //   expect(response.status).to.eq(200);
    //   expect(response.body.message).to.eq('Mocked Data');
    //   expect(response.body.items).to.have.length(3);
    // });
   // cy.request('http://localhost:3000/api/data').then((response) => {
//   expect(response.status).to.eq(200);
//    expect(response.body.message).to.eq('Mocked Data');
//       expect(response.body.items).to.have.length(3);
// });


    // Wait for the intercepted request
    cy.wait('@getData');
  });

});
