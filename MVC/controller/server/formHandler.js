//importing forms json
const FormJson = require('../data/FormJson');
exports.getFormsData = (req, res) => {
  //saving pageName parameter 
  const pageName = req.params.pageName;
  //getting the specific data of the wanted page
  const formData = FormJson.find(page => page.formName === pageName);
  //if data is found return it else return page not found
  formData ? res.json(formData) : res.status(404).send('Page not found');
}
