import { z } from "zod";

export const paymentStatusSchema = z.enum(["success", "pending", "failed"]);
export const paymentTypeSchema = z.enum([
  "salary",
  "bonus",
  "commission",
  "transportation",
  "overtime",
]);

export const paymentSchema = z.object({
  id: z.string(),
  type: paymentTypeSchema,
  value: z.number(),
  paid_at: z.string().datetime(),
  status: paymentStatusSchema,
  description: z.string().nullable(),
});

// Request
export const getPaymentListRequestSchemaTransformed = z
  .object({
    description: z.string().optional().nullable(),
    type: z.array(paymentTypeSchema).optional().nullable(),
    status: z.array(paymentStatusSchema).optional().nullable(),
    page: z.number().optional().nullable(),
    perPage: z.number().optional().nullable(),
  })
  .optional()
  .transform((data) => ({
    search: data?.description,
    type: data?.type?.toString(),
    status: data?.status?.toString(),
    page: data?.page,
    limit: data?.perPage,
  }));

// Response
export const getPaymentListResponseSchemaTransofrmed = z
  .object({
    entities: z.array(paymentSchema),
    limit: z.number(),
    page: z.number(),
    total: z.number(),
  })
  .transform((data) => ({
    ...data,
    pageCount: Math.ceil(data.total / data.limit),
  }));

export const getPaymentListSchema = {
  response: getPaymentListResponseSchemaTransofrmed,
  request: getPaymentListRequestSchemaTransformed,
};
