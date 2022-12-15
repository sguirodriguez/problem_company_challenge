const { Router } = require("express");
import { Request, Response } from "express";
import { LocaleLinguage } from "../typings";
const router = Router();
import CreateDelivery from "../app/Deliveries/CreateDelivery";
import GetAllDeliveries from "../app/Deliveries/GetAllDeliveries";

router.post("/", async (request: Request, response: Response) => {
  try {
    const { idClient, idProduct } = request.body as {
      idClient: number;
      idProduct: number;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await CreateDelivery.execute({
      idClient,
      idProduct,
      locale,
    });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.get("/", async (_request: Request, response: Response) => {
  try {
    const result = await GetAllDeliveries.execute();

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

export default router;
