import express from "express";
import cors from "cors";
import routes from "./routes";
import routesSeller from "./routes/seller";
import routesClient from "./routes/client";
import routesProduct from "./routes/product";
import routesDelivery from "./routes/delivery";

require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.use(routes);
app.use("/seller", routesSeller);
app.use("/client", routesClient);
app.use("/product", routesProduct);
app.use("/delivery", routesDelivery);

app.listen(process.env.PORT || 3333, async () => {
  console.log("running on port 3333");
});
