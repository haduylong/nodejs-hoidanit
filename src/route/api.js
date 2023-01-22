import express from "express"
import APIController from '../controller/APIController';

const router  = express.Router();
// CRUD
const initAPIRoute = (app) => {
    // read
    router.get('/all-user', APIController.getAllUsers);
    // update
    router.put('/update-user', APIController.updateUser);
    // delete
    router.delete('/delete-user/:id', APIController.deleteUser);
    // create
    router.post('/create-user', APIController.createUser);

    return app.use('/api/v1', router);
}

export default initAPIRoute