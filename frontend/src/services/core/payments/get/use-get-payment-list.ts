import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/types/api-types";
import { useQuery } from "@tanstack/react-query";
import { getPaymentList } from "./get-payment-list";
import {
  GetPaymentListRequest,
  GetPaymentListResponseTransformed,
} from "./get-payment-list.types";

export type UseGetPaymentListProps = UseQueryProps<
  ApiResponse<GetPaymentListResponseTransformed>,
  WithParams<GetPaymentListRequest>
>;

export const getPaymentListQueryKey = (props?: GetPaymentListRequest) => [
  "getPaymentList",
  props,
];

export const useGetPaymentList = (props: UseGetPaymentListProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<
    ApiResponse<GetPaymentListResponseTransformed>,
    ApiError
  >({
    queryKey: getPaymentListQueryKey(),
    queryFn: () => getPaymentList(params),
    ...resProps,
  });

  return query;
};
