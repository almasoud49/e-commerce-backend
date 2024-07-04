import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import { TProduct, TSearch } from './product.interface';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body
  const result = await ProductServices.createProduct(product)
  res.json({
    success: true,
    message: 'Product created successfully',
    data: result,
  })
};

const getProductsFromDB = async (req: Request, res: Response) => {
  const searchTerm :TSearch  = req.query.searchTerm as TSearch
  const result = await ProductServices.getProductsFromDB(searchTerm);

  if(result.length ===0){
    throw new Error('No products found matching the search term')

  }

  res.json({
    success: true,
    message: 'Products fetched successfully',
    data: result,
  })
};
const getProductByID = async (req: Request, res: Response) => {
  const productId = req.params.productId
  const result = await ProductServices.getProductByID(productId);
  res.json({
    success: true,
    message: 'Product fetched successfully',
    data: result,
  })
};

const updateProductIntoDB = async(req: Request, res: Response)=>{
const productId = req.params.productId;
const product : TProduct = req.body;

const result = await ProductServices.updateProductIntoDB(productId, product);
res.json({
  success: true,
  message: 'Product updated successfully',
  data: result,
})
};

const deleteProductFromDB = async(req: Request, res: Response)=>{
const productId = req.params.productId;
const result = await ProductServices.deleteProductFromDB(productId);
res.json({
  success: true,
  message: 'Product deleted successfully',
  data: result,
})
};

export const ProductController = {
  createProduct,
  getProductsFromDB,
  getProductByID,
  updateProductIntoDB,
  deleteProductFromDB
}
