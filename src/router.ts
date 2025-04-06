import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import {
  cancelOrder,
  changeOrderStatus,
  createCategory,
  createOrder,
  createProduct,
  listCategories,
  listOrders,
  listProducts,
  listProductsByCategory,
} from './app/useCases';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create products
router.post('/products', upload.single('image'), createProduct);

// List products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Cancel (delete) order
router.delete('/orders/:orderId', cancelOrder);
