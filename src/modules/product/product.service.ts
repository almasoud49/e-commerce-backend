import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (product: TProduct) => {
  const result = await Product.create(product)
  return result
}

const getProductsFromDB = async () => {
  const result = await Product.find()
  return result
}

const getProductByID = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

const updateProductIntoDB = async (id: string, product: TProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, product)
  return result
}

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id })
  return result
}

export const ProductServices = {
  createProduct,
  getProductsFromDB,
  getProductByID,
  updateProductIntoDB,
  deleteProductFromDB,
}
