const express = require ('express');
const router = express.Router();
const itemsController =  require('../controller/query');



router.route('/items').get(itemsController.getAllItem);

router.route('/item/:id').get(itemsController.getItemById);

router.route('/additem').post(itemsController.createItem);

router.route('/updateitem/:id').put(itemsController.updateItem);

router.route('/deleteitem/:id').delete(itemsController.deleteItem);

router.route('/token').post(itemsController.userToken );

router.route('/login').post (itemsController.verifyToken, itemsController.loginUser);


module.exports = router;