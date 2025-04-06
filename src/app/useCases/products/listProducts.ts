import { Request, Response } from 'express';

import { Product } from '../../models';

export async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find();
    response.json(products);
  } catch (error) {
    response.status(500).json({ error });
  }
}
