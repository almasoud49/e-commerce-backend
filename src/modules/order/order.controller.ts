import { Request, Response } from 'express'
import { OrderServices } from './order.service'
import { TEmail } from './order.interface'

const createOrder = async (req: Request, res: Response) => {
  const order = req.body
  const result = await OrderServices.createOrder(order)

  res.json({
    success: true,
    message: 'Order created successfully',
    data: result,
  })
}

const getOrders = async (req: Request, res: Response) => {

  const email : TEmail = req.query.email as TEmail;
  const result = await OrderServices.getOrders(email);

  if(result.length===0){
    throw new Error('Order Not Found')
  }
  res.json({
    success: true,
    message: 'Orders fetched successfully',
    data: result,
  })
}

export const OrderControllers = {
  createOrder,
  getOrders,
}
