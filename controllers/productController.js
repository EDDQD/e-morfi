const productModel = require("../models/productModel.js");

const productController = {
    detail: (req, res) => {
        res.render("./product/detail");
    },
    formNew: (req, res) => {
        res.render('./product/new');
    },
    store: (req, res) => {
        //Creamos el producto
        const {name, description, category, price} = req.body;
        const newProduct = {
            name: name,
            description: description,
            // image: image,
            category: category,
            price: price,
        }
        const productCreated = productModel.create(newProduct);
        res.redirect('/product/detail/:' + productCreated.id);
    },
    edit: (req, res) => {
        const product = productModel.findByPk(req.params.id);

        res.render('product/edit', {
            product
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;

        productModel.update(data, id);

        res.redirect('/product/detail/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        productModel.destroy(id);

        res.redirect('/product/list');
    }
}

module.exports = productController;