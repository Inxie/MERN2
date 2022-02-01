const ProductsController = require('../controllers/products.controllers.js');

module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/products/:id', ProductsController.findOneProduct);
    app.put('/api/products/:id', ProductsController.updateProduct);
    app.post('/api/products', ProductsController.createNewProduct);
    app.delete('/api/products/:id', ProductsController.deleteProduct);
}