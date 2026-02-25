// cypress/e2e/mock_post_request.cy.js

describe('Mocking a POST request with intercept()', () => {

  it('should intercept the POST request and return mocked response', () => {
    // Intercept the POST request and stub the response
    cy.intercept('POST', '/api/submit', {
      statusCode: 201,
      body: { message: 'Form submitted successfully!' }
    }).as('postForm');

    // Trigger the request directly using cy.request()
    cy.request('POST', '/api/submit', { name: 'John Doe' }).then((response) => {
      // Assert the mocked response
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Form submitted successfully!');
    });

    // Wait for the intercepted request
    cy.wait('@postForm');
  });

});
