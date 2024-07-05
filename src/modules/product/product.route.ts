import express from 'express'
import { ProductController } from './product.controller'
const router = express.Router()

router.post('/', ProductController.createProduct)
router.get('/', ProductController.getProductsFromDB)
router.get('/:productId', ProductController.getProductByID)
router.put('/:productId', ProductController.updateProductIntoDB)
router.delete('/:productId', ProductController.deleteProductFromDB)

export const ProductRoutes = router
