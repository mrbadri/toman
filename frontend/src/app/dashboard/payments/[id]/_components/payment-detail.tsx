"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Separator } from "@/components/atoms/separator";
import { ErrorStaus } from "@/components/molecules/errorStatus";
import { formatDateTime, formatPrice } from "@/lib/format-data";
import {
  getPaymentDetailQueryKey,
  useGetPaymentDetail,
} from "@/services/core/payments/{id}/get/use-get-payment-detail";
import { motion } from "framer-motion";
import { Calendar, Clock, DollarSign, FileText } from "lucide-react";
import PaymentBadgeStatus from "../../_components/payment-status";
import { PaymentDetailLoading } from "./patment-detail-loding";

// Main Payment Detail Component
export const PaymentDetail = ({ id }: { id: string }) => {
  const PaymentDetailQuery = useGetPaymentDetail({
    queryKey: getPaymentDetailQueryKey({ id }),
    params: { id },
  });

  if (PaymentDetailQuery.isFetching) {
    return <PaymentDetailLoading />;
  }

  if (PaymentDetailQuery.isError) {
    return (
      <ErrorStaus
        onRetry={() => PaymentDetailQuery.refetch()}
        isRetrying={PaymentDetailQuery.isFetching}
      />
    );
  }

  const { value, description, status, type, paid_at } =
    PaymentDetailQuery.data?.data || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto"
    >
      <div className="w-full mx-auto space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card p-6 rounded-lg shadow-sm border border-border">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Payment <span className="text-muted-foreground">#{id}</span>
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Transaction Overview
            </p>
          </div>
          <PaymentBadgeStatus
            className="capitalize px-4 py-2 text-xs font-medium flex items-center gap-2"
            status={status || "failed"}
          />
        </div>

        {/* Main Card */}
        <Card className="border border-border shadow-md hover:shadow-lg pt-0 transition-shadow bg-card">
          <CardHeader className="bg-muted/50 border-b border-border py-7">
            <CardTitle className="text-lg font-bold text-foreground">
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Amount
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    ${formatPrice(value || 0)}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Payment Type
                  </p>
                  <p className="text-base font-semibold capitalize text-foreground">
                    {type || "N/A"}
                  </p>
                </div>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Paid At
                </p>
                <p className="text-base font-medium text-foreground">
                  {formatDateTime(paid_at || "Not yet processed")}
                </p>
              </div>

              {description && (
                <>
                  <Separator className="bg-border" />
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Description
                    </p>
                    <p className="text-sm text-foreground bg-muted/50 p-4 rounded-md border border-border">
                      {description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
