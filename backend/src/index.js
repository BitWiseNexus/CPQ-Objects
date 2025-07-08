import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pricebookRoutes from "./routes/pricebook.route.js"
import qliRoutes from "./routes/qli.route.js"
import productruleRoutes from "./routes/productrule.route.js"
import priceruleRoutes from "./routes/priceRuleRoutes.js"
import productRoutes from "./routes/productRoutes.js"

import { connectDB } from "./lib/db.js"

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/pricebooks', pricebookRoutes);
app.use('/api/qlis', qliRoutes);
app.use('/api/product-rules', productruleRoutes);
app.use('/api/price-rules', priceruleRoutes);
app.use('/api/products', productRoutes);

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`);
  connectDB();
});

