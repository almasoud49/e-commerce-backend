import  { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async(req:Request, res:Response) =>{
  const product = req.body;
  const result = await ProductServices.createProduct(product)
  res.json({
    success: true,
    message:"Product created successfully",
    data:result
  })
}

export const ProductController = {
  createProduct
}