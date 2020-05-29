exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allPortfolioJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  if(result.error){
    reporter.panic('Prblem beim Laden des Portfolio Projektes.');
    return;
  }

  const projects = result.data.allPortfolioJson.edges;

  projects.forEach(({ node: {slug} }) => {
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve('./src/templates/project.js'),
      context: { slug }
    })
  })
}