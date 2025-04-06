import { Request, Response } from 'express';

import { Category } from '../../models';

export async function listCategories(request: Request, response: Response) {
  try {
    const categories = await Category.find();
    response.json(categories);
  } catch (error) {
    response.status(500).json({ error });
  }
}
