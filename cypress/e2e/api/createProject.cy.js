const faker = require('faker');

describe('Create project', () => {
  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      desc: faker.random.words(5),
    };

    cy.api_createProject(project)
      .then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(project.name);
        expect(response.body.description).to.equal(project.desc);
      });
  });
});
