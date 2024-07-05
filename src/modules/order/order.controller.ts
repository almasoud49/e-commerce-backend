import { Request, Response } from 'express'
import { OrderServices } from './order.service'
import { TEmail, TOrder } from './order.interface'
import { ZodOrderValidation } from './order.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const order: TOrder = req.body
    const zodParsedData = ZodOrderValidation.orderValidationSchema.parse(order)
    const result = await OrderServices.createOrder(zodParsedData)

    res.json({
      success: true,
      message: 'Order created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getOrders = async (req: Request, res: Response) => {
  try {
    const email: TEmail = req.query.email as TEmail
    const result = await OrderServices.getOrders(email)

    if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Order Not Found',
      })
    } else {
      res.json({
        success: true,
        message: 'Orders fetched successfully',
        data: result,
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const OrderControllers = {
  createOrder,
  getOrders,
}
