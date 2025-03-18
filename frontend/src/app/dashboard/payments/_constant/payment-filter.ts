import { DataTableAdvancedFilterField } from "@/types";
import { Payment, PaymentStatus, PaymentType } from "../_types/payment-type";

export const PAYMENT_STATUS_LIST: PaymentStatus[] = [
  "success",
  "pending",
  "failed",
];
export const PAYMENT_STATUS_OPTIONS = PAYMENT_STATUS_LIST.map((status) => {
  return {
    label: status,
    value: status,
  };
});

export const PAYMENT_TYPE_LIST: PaymentType[] = [
  "bonus",
  "commission",
  "salary",
  "transportation",
  "overtime",
];
export const PAYMENT_TYPE_OPTIONS = PAYMENT_TYPE_LIST.map((type) => {
  return {
    label: type,
    value: type,
  };
});

export const PAYMENT_FILTER_FIELDS: DataTableAdvancedFilterField<Payment>[] = [
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Search",
  },
  {
    id: "type",
    label: "Type",
    type: "multi-select",
    options: PAYMENT_TYPE_OPTIONS,
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    options: PAYMENT_STATUS_OPTIONS,
  },
];
