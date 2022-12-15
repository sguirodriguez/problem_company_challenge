const { Router } = require("express");
import { Request, Response } from "express";
const router = Router();
import { LocaleLinguage } from "../typings";
import CreateSeller from "../app/Sellers/CreateSeller";
import GetAllSellers from "../app/Sellers/GetAllSellers";
import UpdateSeller from "../app/Sellers/UpdateSeller";
import DeleteSeller from "../app/Sellers/DeleteSeller";

router.post("/", async (request: Request, response: Response) => {
  try {
    const { name, email, document, address } = request.body as {
      name: string;
      email: string;
      document: string;
      address: string;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await CreateSeller.execute({
      name,
      email,
      document,
      address,
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
    const result = await GetAllSellers.execute();

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

router.patch("/", async (request: Request, response: Response) => {
  try {
    const { id, name, email, document, address } = request.body as {
      id: number;
      name: string;
      email: string;
      document: string;
      address: string;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await UpdateSeller.execute({
      id,
      name,
      email,
      document,
      address,
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

    const result = await DeleteSeller.execute({
      id,
      locale,
    });

    return response.status(result.status).send(result.response);
  } catch (error) {
    return response.status(500).json({
      error,
    });
  }
});

export default router;
