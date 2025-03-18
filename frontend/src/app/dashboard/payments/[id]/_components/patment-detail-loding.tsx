"use client";

import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import { Separator } from "@/components/atoms/separator";
import { Skeleton } from "@/components/atoms/skeleton";
import { motion } from "framer-motion";
import { Calendar, Clock, DollarSign, FileText } from "lucide-react";

export const PaymentDetailLoading = () => (
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full mx-auto space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card p-6 rounded-lg shadow-sm border border-border">
          <div>
            <Skeleton className="h-7 w-32 mb-1" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>

        {/* Main Card */}
        <Card className="border border-border shadow-md pt-0 bg-card">
          <CardHeader className="bg-muted/50 border-b border-border py-7">
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Amount
                  </p>
                  <Skeleton className="h-7 w-24" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Payment Type
                  </p>
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Paid At
                </p>
                <Skeleton className="h-6 w-48" />
              </div>

              <Separator className="bg-border" />
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Description
                </p>
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  </div>
);
