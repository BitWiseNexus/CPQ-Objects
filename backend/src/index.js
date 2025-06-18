import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pricebookRoutes from "./routes/pricebook.route.js"
import { connectDB } from "./lib/db.js"

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/pricebooks', pricebookRoutes);

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`);
  connectDB();
});
