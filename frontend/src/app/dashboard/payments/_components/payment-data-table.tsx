import { ErrorStaus } from "@/components/molecules/errorStatus";
import { DataTable } from "@/components/organisms/data-table/data-table";
import { DataTableSkeleton } from "@/components/organisms/data-table/data-table-skeleton";
import { DataTableToolbar } from "@/components/organisms/data-table/data-table-toolbar";
import {
  getPaymentListQueryKey,
  useGetPaymentList,
} from "@/services/core/payments/get/use-get-payment-list";
import { PAYMENT_FILTER_FIELDS } from "../_constant/payment-filter";
import { useFilterPaymentList } from "../hooks/use-filter-payment-list";
import { usePaymentList } from "../hooks/use-payment-list";

export const PaymentDataTable = () => {
  const getPaymentListParams = useFilterPaymentList();
  const paymentListQuery = useGetPaymentList({
    queryKey: getPaymentListQueryKey(getPaymentListParams),
    params: getPaymentListParams,
  });

  const paymentListData = paymentListQuery?.data?.data;
  const paymentListEntities = paymentListData?.entities;
  const paymentListPageCount = paymentListData?.pageCount || 1;
  const { table } = usePaymentList({
    data: paymentListEntities || [],
    pageCount: paymentListPageCount,
  });

  if (paymentListQuery.isError) {
    return (
      <ErrorStaus
        onRetry={() => paymentListQuery.refetch()}
        isRetrying={paymentListQuery.isFetching}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <DataTableToolbar table={table} filterFields={PAYMENT_FILTER_FIELDS} />
      {paymentListQuery.isLoading ? (
        <DataTableSkeleton
          columnCount={6}
          showViewOptions={false}
          cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem", "8rem"]}
        />
      ) : (
        <DataTable table={table} />
      )}
    </div>
  );
};
