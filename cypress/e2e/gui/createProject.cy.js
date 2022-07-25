const faker = require('faker');

describe('Create project', () => {
  beforeEach(() => {
    cy.login();
  });

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      desc: faker.random.words(5),
    };

    cy.gui_createProject(project);

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`);
    cy.contains(project.name).should('be.visible');
    cy.contains(project.desc).should('be.visible');
  });
});
