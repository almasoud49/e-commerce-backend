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
};

const getProductsFromDB = async(req:Request, res:Response) =>{
  
  const result = await ProductServices.getProductsFromDB()
  res.json({
    success: true,
    message:"Products fetched successfully",
    data:result
  })
};

export const ProductController = {
  createProduct,
  getProductsFromDB
}