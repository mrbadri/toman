import { GetPaymentListResponseTransformed } from "@/services/core/payments/get/get-payment-list.types";

export type Payment = GetPaymentListResponseTransformed["entities"][number];
export type PaymentType = Payment["type"];
export type PaymentStatus = Payment["status"];
