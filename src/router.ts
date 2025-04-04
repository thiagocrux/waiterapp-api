import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategory);

// List products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create products
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders/:ordersId', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/categories', (req, res) => {
  res.send('OK');
});

// TODO: Delete cancel order
