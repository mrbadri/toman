import { useEffect } from "react";
import { ErrorStaus } from "@/components/molecules/errorStatus";
import { DataCard } from "@/components/organisms/data-card/data-card";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useInfinitGetPaymentList } from "@/services/core/payments/get/use-infinit-get-payment-list";
import { useFilterPaymentList } from "../hooks/use-filter-payment-list";
import { usePaymentList } from "../hooks/use-payment-list";
import { PaymentCardItemLoading } from "./patment-card-item-loding";
import { DataTableToolbar } from "@/components/organisms/data-table/data-table-toolbar";
import { PAYMENT_FILTER_FIELDS } from "../_constant/payment-filter";

export const PaymentDataCardLoading = ({ count = 10 }: { count?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, index) => (
      <PaymentCardItemLoading key={index} />
    ))}
  </div>
);

export const PaymentDataCard = () => {
  const getPaymentListParams = useFilterPaymentList();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    refetch,
    isLoading,
  } = useInfinitGetPaymentList({
    params: getPaymentListParams,
  });

  const paymentListEntities = data?.pages.flatMap((page) => page.data.entities);
  const { table } = usePaymentList({
    data: paymentListEntities || [],
  });

  const debouncedFetchNextPage = useDebouncedCallback(fetchNextPage, 300);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "400px",
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      debouncedFetchNextPage();
    }
  }, [isIntersecting, hasNextPage, debouncedFetchNextPage]);

  if (isError) {
    return <ErrorStaus isRetrying={isLoading} onRetry={refetch} />;
  }

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} filterFields={PAYMENT_FILTER_FIELDS} />

      {isLoading ? (
        <PaymentDataCardLoading count={5} />
      ) : (
        <DataCard table={table} />
      )}

      <div ref={ref}>
        {isFetchingNextPage && <PaymentDataCardLoading count={5} />}
      </div>
    </div>
  );
};
