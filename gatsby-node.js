/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const isCaseStudy =
      page.path.replace(/\//g, '') === 'rocketpost' ||
      page.path.replace(/\//g, '') === 'leveleleven' ||
      page.path.replace(/\//g, '') === 'element5' ||
      page.path.replace(/\//g, '') === 'gentlemans-box';

    if (isCaseStudy) {
      page.layout = "case-study";
      createPage(page);
    }

    resolve();
  });
};
