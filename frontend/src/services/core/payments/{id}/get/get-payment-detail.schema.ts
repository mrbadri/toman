import { z } from "zod";
import { paymentSchema } from "../../get/get-payment-list.schema";

// Resquest
export const getPaymentDetailRequestSchemaTransformed = z
  .object({
    id: z.string(),
  })
  .transform((data) => data);

// Response
export const getPaymentDetailResponseSchemaTransofrmed =
  paymentSchema.transform((data) => data);

export const getPaymentDetailSchema = {
  response: getPaymentDetailResponseSchemaTransofrmed,
  request: getPaymentDetailRequestSchemaTransformed,
};
