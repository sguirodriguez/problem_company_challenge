const { Router } = require("express");
import { Request, Response } from "express";
const router = Router();

import CreateClient from "../app/Clients/CreateClient";
import GetAllClients from "../app/Clients/GetAllClients";
import UpdateClient from "../app/Clients/UpdateClient";
import DeleteClient from "../app/Clients/DeleteClient";
import { LocaleLinguage } from "../typings";

router.post("/", async (request: Request, response: Response) => {
  try {
    const { name, email, document, address } = request.body as {
      name: string;
      email: string;
      document: string;
      address: string;
    };

    const locale = request.headers.locale as LocaleLinguage;

    const result = await CreateClient.execute({
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
    const result = await GetAllClients.execute();

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

    const result = await UpdateClient.execute({
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

    const result = await DeleteClient.execute({
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
