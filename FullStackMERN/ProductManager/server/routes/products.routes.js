const ProductsController = require('../controllers/products.controllers.js');

module.exports = app => {
    app.get('/products', ProductsController.findAllProducts);
    app.get('/products/:id', ProductsController.findOneProduct);
    app.put('/products/:id/edit', ProductsController.updateProduct);
    app.post('/products', ProductsController.createNewProduct);
    app.delete('/products/:id', ProductsController.deleteProduct);
}