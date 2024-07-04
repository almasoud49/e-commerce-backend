import { TEmail, TOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (order: TOrder) => {
  const result = await Order.create(order)
  return result
};

const getOrders = async(email:TEmail)=>{

  if(email){
    const result = await Order.find({email:email});
    return result
  }else{
    const result = await Order.find();
    return result;
  }
  
}

export const OrderServices = {
  createOrder,
  getOrders
}
