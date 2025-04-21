import { Request, Response } from 'express';
import { readFileSync } from 'node:fs';

import { deleteLocalFile } from '../../../utils';
import { Product } from '../../models';

export async function createProduct(request: Request, response: Response) {
  try {
    const locallyStoredImage = request.file;
    const { name, description, price, category, ingredients } = request.body;

    if (!locallyStoredImage) {
      response.status(400).json({ error: 'The image does not exists.' });
      return;
    }

    const imagePath = locallyStoredImage.path;
    const imageBuffer = readFileSync(imagePath);
    const formData = new FormData();
    formData.append('image', imageBuffer.toString('base64'));

    const imageUploadResponse = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const { data: uploadedImageData } = await imageUploadResponse.json();
    const imageURL = uploadedImageData.image.url;

    deleteLocalFile(imagePath);

    const product = await Product.create({
      name,
      description,
      imagePath: imageURL,
      price: Number(price),
      ingredients: JSON.parse(ingredients),
      category,
    });

    response.status(201).json(product);
  } catch (error) {
    response.status(500).json({ error });
  }
}
