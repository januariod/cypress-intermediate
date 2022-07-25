const faker = require('faker');

describe('Create issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    desc: faker.random.words(5),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      desc: faker.random.words(5),
    },
  };

  before(() => {
    cy.login();
    cy.api_createProject(issue.project);
  });

  it('successfully', () => {
    cy.gui_CreateIssue(issue);

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.desc);
  });
});
