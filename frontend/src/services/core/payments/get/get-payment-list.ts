import { coreGateway } from "@/lib/gateway/core-gateway";
import path from "path";
import { ApiResponse } from "@/types/api-types";
import { requestHandler } from "@/lib/request-handler";
import { getPaymentListSchema as schema } from "./get-payment-list.schema";
import {
  GetPaymentListRequest,
  GetPaymentListResponse,
  GetPaymentListResponseTransformed,
} from "./get-payment-list.types";

const getPaymentListURL = () => path.join("/payments");

export const getPaymentList = async (
  props: GetPaymentListRequest
): Promise<ApiResponse<GetPaymentListResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getPaymentListURL();

  const response = await requestHandler(
    () =>
      coreGateway.get<GetPaymentListResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
