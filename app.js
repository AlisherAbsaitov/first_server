import express from "express";
import categoriesRouter from "./routes/Categories.js";
import productsRouter from "./routes/ProductsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";
import path from "path";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
console.log(__dirname);

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
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: [`${__dirname, "routes", "*.js"}`], // Correct the path to your routes
};
/**
 * @swagger
 * /categories:
 *   get:
 *     name: Retrieve a list of categories
 *     description: This endpoint returns a list of all categories.
 *     responses:
 *       200:
 *         description: A list of categories
 */

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", authRoutes);

export default app;
