import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/types/api-types";
import { useQuery } from "@tanstack/react-query";
import { getPaymentDetail } from "./get-payment-detail";
import {
  GetPaymentDetailRequest,
  GetPaymentDetailResponseTransformed,
} from "./get-payment-detail.types";

export type UseGetPaymentDetailProps = UseQueryProps<
  ApiResponse<GetPaymentDetailResponseTransformed>,
  WithParams<GetPaymentDetailRequest>
>;

export const getPaymentDetailQueryKey = (props: GetPaymentDetailRequest) => [
  "getPaymentDetail",
  props,
];

export const useGetPaymentDetail = (props: UseGetPaymentDetailProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<
    ApiResponse<GetPaymentDetailResponseTransformed>,
    ApiError
  >({
    queryKey: getPaymentDetailQueryKey(params),
    queryFn: () => getPaymentDetail(params),
    ...resProps,
  });

  return query;
};
