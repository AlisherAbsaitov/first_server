import express from "express";
import categoriesRouter from "./routes/Categories.js";
import productsRouter from "./routes//ProductsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Products",
      version: "1.0.0",
      description: "Elektronik jihozlar uchun",
    },
    servers: [
      {
        url: "https://first-server-jmlo.onrender.com/",
      },
    ],
  },
  apis: [`${import.meta.dirname}/routes/*.js`],
}

const specs = swaggerJSDoc(options);
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", authRoutes);
export default app;
