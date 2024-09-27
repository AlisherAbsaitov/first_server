import express from "express";
import categoriesRouter from "./routes/Categories.js";
import productsRouter from "./routes/ProductsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import commentRoute from "./routes/CommentsRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", authRoutes);
app.use("/comments", commentRoute);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

export default app;
