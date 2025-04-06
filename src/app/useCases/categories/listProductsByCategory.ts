import { Request, Response } from 'express';

import { Product } from '../../models';

export async function listProductsByCategory(
  request: Request,
  response: Response
) {
  try {
    const { categoryId } = request.params;
    const products = await Product.find().where('category').equals(categoryId);
    response.json(products);
  } catch (error) {
    response.status(500).json({ error });
  }
}
