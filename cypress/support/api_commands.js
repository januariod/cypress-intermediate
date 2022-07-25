const accessToken = Cypress.env('gitlab_access_token');

Cypress.Commands.add('api_createProject', (project) => {
  cy.request({
    method: 'POST',
    url: `api/v4/projects/?private_token=${accessToken}`,
    body: {
      name: project.name,
      description: project.desc,
      initialize_with_readme: true,
    },
  });
});

Cypress.Commands.add('api_createIssue', (issue) => {
  cy.api_createProject(issue.project)
    .then((response) => {
      cy.request({
        method: 'POST',
        url: `api/v4/projects/${response.body.id}/issues/?private_token=${accessToken}`,
        body: {
          title: issue.title,
          description: issue.desc,
        },
      });
    });
});

Cypress.Commands.add('api_createLabel', (projectID, label) => {
  cy.request({
    method: 'POST',
    url: `api/v4/projects/${projectID}/labels?private_token=${accessToken}`,
    body: {
      name: label.name,
      color: label.color,
    },
  });
});

Cypress.Commands.add('api_createMilestone', (projectID, milestone) => {
  cy.request({
    method: 'POST',
    url: `api/v4/projects/${projectID}/milestones?private_token=${accessToken}`,
    body: {
      title: milestone.title,
    },
  });
});
