const express = require('express')
import configViewEngine from './configs/viewEngine' // import ham configViewEngine
import initAPIRoute from './route/api'
import initWebRoute from './route/web'

const app = express();
const port = 3000;
// setup để nhận về dữ liệu từ url gửi đến req.body 
app.use(express.urlencoded({ extended: true })); // url encode 
app.use(express.json());
// set up view engine
configViewEngine(app);
// set route
initAPIRoute(app);
initWebRoute(app);
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})