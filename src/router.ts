import { Router } from 'express';

export const router = Router();

// List categories
router.get('/categories', (req, res) => {
  res.send('OK');
});

// Create categories
router.post('/categories', (req, res) => {
  res.send('OK');
});

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
