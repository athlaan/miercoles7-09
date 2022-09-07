import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// todos los productos
router.get('/products', (req, res) => {
  res.end();
});
// un producto por id
router.get('/products', (req, res) => {
  Product.find((err, products) => {
    res.render('cart', { products : products })
  });
});
//crea un producto
router.get('/products/:id', (req, res) => {
  const { title, price, stock } = req.body;
  const product = new Product ({title, price, stock });
  product.save((err, product) => {
    res.status(201).json(product);
  })
});
//borra un producto
router.get('/products', (req, res) => {
  res.end();
});
