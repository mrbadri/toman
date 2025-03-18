import { coreGateway } from "@/lib/gateway/core-gateway";
import path from "path";
import { ApiResponse } from "@/types/api-types";
import { requestHandler } from "@/lib/request-handler";
import { getPaymentDetailSchema as schema } from "./get-payment-detail.schema";
import {
  GetPaymentDetailRequest,
  GetPaymentDetailResponse,
  GetPaymentDetailResponseTransformed,
} from "./get-payment-detail.types";

const getPaymentDetailURL = (id: string) => path.join("/payments", id);

export const getPaymentDetail = async (
  props: GetPaymentDetailRequest
): Promise<ApiResponse<GetPaymentDetailResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getPaymentDetailURL(payloadParsed.id);

  const response = await requestHandler(
    () =>
      coreGateway.get<GetPaymentDetailResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
