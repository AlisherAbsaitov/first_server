import swaggerAutogen from "swagger-autogen";
const doc = {
  info: {
    title: "My Api",
    description: "Description",
  },
  host: "https://first-server-jmlo.onrender.com",
};

const output = "./swagger-autogen.json";
const routes = ["../app.js"];

swaggerAutogen(output, routes, doc);
