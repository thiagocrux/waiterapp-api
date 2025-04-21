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

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);
router.get('/categories/:categoryId/products', listProductsByCategory);
router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', cancelOrder);
