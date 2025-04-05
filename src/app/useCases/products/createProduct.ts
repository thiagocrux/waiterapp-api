import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(request: Request, response: Response) {
  try {
    const imagePath = request.file?.filename;
    const { name, description, price, category, ingredients } = request.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: JSON.parse(ingredients),
      category,
    });

    response.status(201).json(product);
  } catch (error) {
    response.status(500).json({ error });
  }
}
