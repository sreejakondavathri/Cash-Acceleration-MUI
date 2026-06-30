import axios from "axios";

import type {
  Contract,
  CashKick,
} from "../types/cashAcceleration.types";

const API_URL = "http://localhost:3001";

export const getContracts = async (): Promise<
  Contract[]
> => {
  const response = await axios.get<Contract[]>(
    `${API_URL}/contracts`
  );

  return response.data;
};

export const getCashKicks = async (): Promise<
  CashKick[]
> => {
  const response = await axios.get<CashKick[]>(
    `${API_URL}/cashKicks`
  );

  return response.data;
};