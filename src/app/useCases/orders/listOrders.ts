import { Request, Response } from 'express';

import { Order } from '../../models';

export async function listOrders(request: Request, response: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');
    response.json(orders);
  } catch (error) {
    response.status(500).json({ error });
  }
}
