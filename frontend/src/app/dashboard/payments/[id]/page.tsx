import { PaymentDetail } from "./_components/payment-detail";

const PaymentDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <PaymentDetail id={id} />;
};

export default PaymentDetailPage;
