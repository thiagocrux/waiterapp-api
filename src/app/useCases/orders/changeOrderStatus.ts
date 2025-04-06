import { Request, Response } from 'express';

import { Order } from '../../models';

export async function changeOrderStatus(request: Request, response: Response) {
  try {
    const { orderId } = request.params;
    const { status } = request.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      response.status(400).json({
        error:
          'Invalid status! The statuses allowed are: "WAITING", "IN_PRODUCTION" and "DONE".',
      });

      return;
    }

    await Order.findByIdAndUpdate(orderId, { status });
    response.sendStatus(204);
  } catch (error) {
    response.status(500).json({ error });
  }
}
