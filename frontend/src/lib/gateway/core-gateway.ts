import axios from "axios";

export const coreGateway = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GATEWAY_API_BASE_URL,
});
