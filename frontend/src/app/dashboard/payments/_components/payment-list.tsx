"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { PaymentDataCard } from "./payment-data-card";
import { PaymentDataTable } from "./payment-data-table";

const PaymentList = () => {
  // TODO: this hook have a bug at the first time
  //  handle initial value media query server side
  const isMobile = useMediaQuery("screen and (max-width: 768px)", true, {
    getInitialValueInEffect: false,
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Payment List</h1>
      {isMobile ? (
        <div>
          <PaymentDataCard />
        </div>
      ) : (
        <div>
          <PaymentDataTable />
        </div>
      )}
    </div>
  );
};

export default PaymentList;
