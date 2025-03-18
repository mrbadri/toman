import { z } from "zod";
import { getPaymentDetailSchema } from "./get-payment-detail.schema";

// Response
export type GetPaymentDetailRequest = z.input<
  typeof getPaymentDetailSchema.request
>;

export type GetPaymentDetailRequestTransofrmed = z.infer<
  typeof getPaymentDetailSchema.request
>;

// Request
export type GetPaymentDetailResponse = z.input<
  typeof getPaymentDetailSchema.response
>;

export type GetPaymentDetailResponseTransformed = z.infer<
  typeof getPaymentDetailSchema.response
>;
