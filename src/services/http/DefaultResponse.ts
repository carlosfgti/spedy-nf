import { Response } from "express";

export type DefaultResponse = {
  data: Response;
  status: number;
};
