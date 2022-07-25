const faker = require('faker');

describe('Git clone', () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    desc: faker.random.words(5),
  };

  before(() => {
    cy.api_createProject(project);
  });

  it('successfully', () => {
    cy.cli_cloneViaSSH(project);
    cy.readFile(`temp/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.desc);
  });
});
