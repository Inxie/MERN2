const Products = require('../models/products.models.js');

module.exports.findAllProducts = (req, res) => {
    console.log("Trying to find all products!")
    Products.find()
        .then(allProducts => res.json({ product: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong displaying all!', error: err }));
}

module.exports.findOneProduct = (req, res) => {
    console.log("Trying to find one product!")
    Products.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong finding!', error: err }));
}

module.exports.createNewProduct = (req, res) => {
    console.log("Trying to create a new product!")
    Products.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: 'Something went wrong creating!', error: err }));
}

module.exports.updateProduct = (req, res) => {
    console.log("Trying to update a product!")
    Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {res.json({ product: updatedProduct })
    })
        .catch(err => res.json({ message: 'Something went wrong updating!', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    console.log("Trying to delete a product!")
    Products.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong deleting!', error: err }));
}
