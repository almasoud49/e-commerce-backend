import express, { Request, Response } from 'express'
import { ProductRoutes } from './modules/product/product.route';
import { OrderRoutes } from './modules/order/order.route';
const app = express();


app.use(express.json());

app.use("/api/products" , ProductRoutes);
app.use("/api/orders" , OrderRoutes);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello Everyone to My E-Commerce Backend Application!')
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route Not Found.",
  });
});

export default app;
