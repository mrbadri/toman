import { useDataTable } from "@/hooks/use-data-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { getPaymentColumns } from "../_components/get-payment-columns";
import { Payment } from "../_types/payment-type";
import { PaymentCardItem } from "../_components/payment-card-item";
import { PAYMENT_FILTER_FIELDS } from "../_constant/payment-filter";

export type PaymentListProps = {
  data: Payment[] | undefined;
  pageCount?: number;
};

export const usePaymentList = ({ data, pageCount }: PaymentListProps) => {
  const router = useRouter();
  const columns = useMemo(() => getPaymentColumns(), []);

  return useDataTable({
    data: data || [],
    columns,
    pageCount,
    getRowId: (originalRow) => originalRow.id,
    filterFields: PAYMENT_FILTER_FIELDS,
    shallow: false,
    clearOnDefault: true,
    meta: {
      onRowClick: (row) => {
        router.push(`payments/${row.id}`);
      },
      mobileRowComponent: ({ row, ...resProps }) => (
        <PaymentCardItem {...row.original} {...resProps} />
      ),
    },
  });
};
