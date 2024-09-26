import swaggerAutogen from "swagger-autogen";
const doc = {
  info: {
    title: "My Api",
    description: "Description",
  },
  host: "localhost:3000",
};

const output = "./swagger-autogen.json";
const routes = ["../app.js"];

swaggerAutogen(output, routes, doc);
