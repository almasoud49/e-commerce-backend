import express from 'express'
import { ProductController } from './product.controller';

const router = express.Router();

router.post("/" , ProductController.createProduct);
router.get("/" , ProductController.getProductsFromDB);
router.get("/:id" , ProductController.getProductByID);



export const ProductRoutes = router;

