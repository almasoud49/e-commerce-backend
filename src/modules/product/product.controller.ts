import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import { TProduct, TSearch } from './product.interface'
import { ZodValidation } from './product.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body
    const zodParsedData =
      ZodValidation.createProductValidationSchema.parse(product)

    const result = await ProductServices.createProduct(zodParsedData)
    res.json({
      success: true,
      message: 'Product created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getProductsFromDB = async (req: Request, res: Response) => {
  try {
    const searchTerm: TSearch = req.query.searchTerm as TSearch
    const result = await ProductServices.getProductsFromDB(searchTerm)

    if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: `No products found matching named ${searchTerm} `,
      })
    } else {
      res.json({
        success: true,
        message: 'Products fetched successfully',
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
const getProductByID = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const result = await ProductServices.getProductByID(productId)
    res.json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const updateProductIntoDB = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const product: TProduct = req.body
    const result = await ProductServices.updateProductIntoDB(productId, product)
    res.json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const result = await ProductServices.deleteProductFromDB(productId)
    res.json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const ProductController = {
  createProduct,
  getProductsFromDB,
  getProductByID,
  updateProductIntoDB,
  deleteProductFromDB,
}
