"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Separator } from "@/components/atoms/separator";
import { Skeleton } from "@/components/atoms/skeleton";
import { cn } from "@/lib/utils";
import { Clock, DollarSign, FileText } from "lucide-react";

export const PaymentCardItemLoading = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "w-full overflow-hidden pt-0   border border-border shadow-sm transition-shadow bg-card",
        className
      )}
    >
      <CardHeader className="p-4 bg-muted/50 border-b border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <CardTitle className="flex items-center gap-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-16" />
          </CardTitle>
          <Skeleton className="h-6 w-20 rounded-full" />
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
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Payment Type
              </p>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          <Separator className="bg-border" />

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Description
            </p>
            <div className="text-sm text-foreground bg-muted/50 p-4 rounded-md border border-border">
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
