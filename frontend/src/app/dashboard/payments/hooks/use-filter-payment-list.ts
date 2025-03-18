import {
  paymentTypeSchema,
  paymentStatusSchema,
} from "@/services/core/payments/get/get-payment-list.schema";
import { GetPaymentListRequest } from "@/services/core/payments/get/get-payment-list.types";
import { useQueryStates } from "nuqs";
import { z } from "zod";

export const useFilterPaymentList = (): GetPaymentListRequest => {
  const [queryParams] = useQueryStates({
    description: z.string().optional(),
    type: z.array(paymentTypeSchema),
    status: z.array(paymentStatusSchema),
    perPage: z.number().optional(),
    page: z.number().optional(),
  });

  return {
    perPage: queryParams.perPage,
    page: queryParams.page,
    description: queryParams.description,
    type: queryParams.type,
    status: queryParams.status,
  };
};
