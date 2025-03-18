"use client";

import { GetPaymentListRequest } from "@/services/core/payments/get/get-payment-list.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PaymentFilterState {
  filters: GetPaymentListRequest;
  setFilters: (filters: Partial<GetPaymentListRequest>) => void;
  resetFilters: () => void;
}

// INFO: This hook is defined but never used in the app  
// because I handle requirements with `nuqs` (search params) and avoid using state management.
export const usePaymentFilterStore = create<PaymentFilterState>()(
  persist(
    (set) => ({
      filters: {
        perPage: undefined,
        page: undefined,
        description: undefined,
        type: [],
        status: [],
      },
      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),
      resetFilters: () =>
        set({
          filters: {
            perPage: undefined,
            page: undefined,
            description: undefined,
            type: [],
            status: [],
          },
        }),
    }),
    {
      name: "payment-filter-storage",
      partialize: (state) => ({
        filters: state.filters, // Only persist the `filters` object
      }),
    }
  )
);


