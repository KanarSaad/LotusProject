const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
//import pages json file
 const pagesData = require('./textPagesHandler');
//immport forms json file
 const formsData = require('./formHandler');
//data of pages
 app.post('/pages/:pageName', pagesData.getPageData);
//data of form pages
 app.post('/forms/:pageName', formsData.getFormsData);


 app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
 });

