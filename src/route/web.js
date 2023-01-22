import express from "express"
import homeController from '../controller/homeController'

const router = express.Router()

const initWebRoute = (app) => { 
    // get index page
    router.get('/', homeController.getIndexPage);
    //get detail user
    router.get('/detail-user/:id', homeController.getDetailUser);
    // delete users
    router.post('/delete-user', homeController.deleteUser);

    return app.use('/', router); 
}

export default initWebRoute