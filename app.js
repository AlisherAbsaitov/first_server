import express from "express";
import categoriesRouter from "./routes/Categories.js";
import productsRouter from "./routes/ProductsRoutes.js";
import authRoutes from "./routes/authRoutes.js";




const app = express();


app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", authRoutes);

export default app;
