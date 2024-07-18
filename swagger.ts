import { Request, Response, Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "express-hexagonal",
      description: "express backend",
      contact: {
        name: "Julian David Ortiz Alviar",
        email: "jdavidortizy2k@gmail.com",
        url: "https://github.com/Jdavid0610/express-hexagonal",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3080/api/",
        description: "Local server",
      },
      {
        url: "<your live url here>",
        description: "Live server",
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ["./src/routes/api.ts"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app: Express, _port: string | 4000) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get("/docs.json", (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
export default swaggerDocs;
