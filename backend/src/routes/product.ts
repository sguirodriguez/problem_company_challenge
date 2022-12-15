const { Router } = require("express");
import { Request, Response } from "express";
import { LocaleLinguage } from "../typings";
import DeleteProduct from "src/app/Products/DeleteProduct";
const router = Router();
import CreateProduct from "../app/Products/CreateProduct";
import GetAllProducts from "../app/Products/GetAllProducts";
import UpdateProduct from "../app/Products/UpdateProduct";

router.post("/", async (request: Request, response: Response) => {
  try {
    const { name, value, idSeller } = request.body as {
      name: string;
      value: number;
      idSeller: number;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await CreateProduct.execute({
      name,
      value,
      idSeller,
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
    const result = await GetAllProducts.execute();

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.patch("/", async (request: Request, response: Response) => {
  try {
    const { id, name, value, idSeller } = request.body as {
      id: number;
      name: string;
      value: number;
      idSeller: number;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await UpdateProduct.execute({
      id,
      name,
      value,
      idSeller,
      locale,
    });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.delete("/", async (request: Request, response: Response) => {
  try {
    const { id } = request.body as {
      id: number;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await DeleteProduct.execute({ id, locale });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

export default router;
