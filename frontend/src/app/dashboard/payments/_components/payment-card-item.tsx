"use client";

import { STATUS_CONDIG } from "@/app/dashboard/payments/_components/payment-status";
import { Payment } from "@/app/dashboard/payments/_types/payment-type";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Separator } from "@/components/atoms/separator";
import { capitalize } from "@/lib/capitalize";
import { EMPTY_VALUE, formatPrice } from "@/lib/format-data";
import { cn } from "@/lib/utils";
import { MobileRowComponentProps } from "@/types/tanstack-table";
import { Clock, DollarSign, FileText } from "lucide-react";

export type PaymentCardItemProps = Payment &
  Omit<MobileRowComponentProps, "row">;

export const PaymentCardItem = (props: PaymentCardItemProps) => {
  const { value, status, type, description, id, onClick } = props;

  const statusClasses = STATUS_CONDIG[status];

  return (
    <Card
      onClick={onClick}
      className={cn(
        "w-full overflow-hidden   border border-border  pt-0  shadow-sm hover:shadow-md transition-shadow bg-card",
        props.className
      )}
    >
      <CardHeader
        className={cn(
          "!p-4 bg-muted/50 border-b border-border",
          statusClasses.bg
        )}
      >
        <div
          className={
            "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          }
        >
          <CardTitle className="text-xl font-bold text-foreground">
            Payment <span className="text-muted-foreground">#{id}</span>
          </CardTitle>
          <span
            className={cn(
              "text-sm font-semibold  sm:text-base  flex items-center gap-1.5",
              statusClasses.text
            )}
          >
            {capitalize(status)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5" />
                Amount
              </p>
              <p className="text-lg font-semibold text-foreground">
                ${formatPrice(value)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Payment Type
              </p>
              <p className="text-sm font-semibold capitalize text-foreground">
                {type || "N/A"}
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Description
            </p>
            <p className="text-sm text-foreground bg-muted/50 p-4 rounded-md border border-border">
              {description || EMPTY_VALUE}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
