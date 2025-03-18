import {
  DefinedInitialDataOptions,
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse<T = any, D = any> = AxiosResponse<T, D>;

export type WithParams<P = unknown | undefined> = { params: P };

export type UseQueryProps<
  TQueryFnData = unknown,
  TVariables extends WithParams = WithParams,
  TError = ApiError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Partial<DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>> &
  TVariables;

export type UseInfiniteQueryProps<
  TQueryFnData,
  TVariables extends WithParams = WithParams,
  TError = ApiError,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = number
> = Partial<
  UseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryFnData,
    TQueryKey,
    TPageParam
  >
> &
  TVariables;

export type UseMutationProps<
  TData = unknown,
  TError = ApiError,
  TVariables = void,
  TContext = unknown
> = Partial<UseMutationOptions<TData, TError, TVariables, TContext>>;

export type ApiError = AxiosError<{
  message: string;
}>;
