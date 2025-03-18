import {
  ApiError,
  ApiResponse,
  UseInfiniteQueryProps,
  WithParams,
} from "@/types/api-types";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getPaymentList } from "./get-payment-list";
import {
  GetPaymentListRequest,
  GetPaymentListResponseTransformed,
} from "./get-payment-list.types";

// Define the correct query key function
export const getPaymentListQueryKey = (params?: GetPaymentListRequest) => [
  "infinitGetPaymentList",
  params,
];

export type UseInfinitGetPaymentListProps = UseInfiniteQueryProps<
  ApiResponse<GetPaymentListResponseTransformed>,
  WithParams<GetPaymentListRequest>
>;

export const useInfinitGetPaymentList = (
  props: UseInfinitGetPaymentListProps
) => {
  const { params, ...resProps } = props;

  return useInfiniteQuery<
    ApiResponse<GetPaymentListResponseTransformed>,
    ApiError,
    InfiniteData<ApiResponse<GetPaymentListResponseTransformed>>,
    QueryKey,
    number
  >({
    queryKey: getPaymentListQueryKey(params),
    queryFn: async ({ pageParam = 1 }) =>
      await getPaymentList({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.data?.page || 1;
      const totalPages = lastPage?.data?.pageCount || 1;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
    ...resProps,
  });
};
