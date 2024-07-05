import { Product } from '../product/product.model'
import { TEmail, TOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (order: TOrder) => {
  //checking the available quantity in inventory
  const product = await Product.findById(order.productId)
  if (!product) {
    throw Error('Product Not Found')
  }

  if (
    product.inventory.quantity <= 0 ||
    !product.inventory.inStock ||
    order.quantity > product.inventory.quantity
  ) {
    throw Error('Insufficient Stock')
  }

  //Updating the inventory quantity and inStock status
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: order.productId, 'inventory.quantity': { $gt: 0 } },
    {
      $inc: { 'inventory.quantity': -order.quantity },
      'inventory.inStock': true,
    },
    { new: true },
  )

  if (updatedProduct?.inventory?.quantity === 0) {
    await Product.updateOne(
      { _id: order.productId },
      { 'inventory.inStock': false },
    )
  }

  const result = await Order.create(order)
  return result
}

const getOrders = async (email: TEmail) => {
  if (email) {
    const result = await Order.find({ email: email })
    return result
  } else {
    const result = await Order.find()
    return result
  }
}

export const OrderServices = {
  createOrder,
  getOrders,
}
