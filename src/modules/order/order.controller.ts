import { Request, Response } from 'express'
import { OrderServices } from './order.service'

const createOrder = async(req: Request, res: Response) =>{

  const order = req.body;
  const result = await OrderServices.createOrder(order)

  res.json({
    success: true,
    message: 'Order created successfully',
    data: result,
  })
};


export const OrderControllers = {
  createOrder
}