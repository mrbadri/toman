import { z } from "zod";
import { getPaymentListSchema } from "./get-payment-list.schema";

// Request
export type GetPaymentListRequest = z.input<
  typeof getPaymentListSchema.request
>;

export type GetPaymentListRequestTransofrmed = z.infer<
  typeof getPaymentListSchema.request
>;

// Response
export type GetPaymentListResponse = z.input<
  typeof getPaymentListSchema.response
>;

export type GetPaymentListResponseTransformed = z.infer<
  typeof getPaymentListSchema.response
>;
