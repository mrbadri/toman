import { Suspense } from "react";
import PaymentList from "./_components/payment-list";

const PaymentListPage = () => {
  return (
    <Suspense>
      <PaymentList />
    </Suspense>
  );
};

export default PaymentListPage;
