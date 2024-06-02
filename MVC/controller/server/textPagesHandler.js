//import pages json
const PagesJson = require('../data/PagesJson');
exports.getPageData = (req, res) => {
  const pageName = req.params.pageName;
  const pageData = PagesJson.find(page => page.pageName === pageName);
  //if the required page is found return its data else 
  //return page not found
  pageData ? res.json(pageData) : res.status(404).send('Page not found');
  }
