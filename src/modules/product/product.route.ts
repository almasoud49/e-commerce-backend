import express from 'express'
import { ProductController } from './product.controller';

const router = express.Router();

router.get("/" , ProductController.getProductsFromDB);
router.post("/" , ProductController.createProduct);

router.get("/:productId" , ProductController.getProductByID);
router.put("/:productId" , ProductController.updateProductIntoDB);



export const ProductRoutes = router;

