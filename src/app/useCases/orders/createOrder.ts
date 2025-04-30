import { Request, Response } from 'express';
import { io } from '../../..';

import { Order } from '../../models';

export async function createOrder(request: Request, response: Response) {
  try {
    const { table, products } = request.body;
    const order = await Order.create({ table, products });
    const orderDetails = await order.populate('products.product');
    io.emit('orders@new', orderDetails);
    response.status(201).json(order);
  } catch (error) {
    response.status(500).json({ error });
  }
}
