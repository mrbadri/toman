"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/organisms/data-table/data-table-column-header";
import { Payment, PaymentStatus } from "../_types/payment-type";
import { EMPTY_VALUE, formatDateTime, formatPrice } from "@/lib/format-data";
import PaymentBadgeStatus from "./payment-status";

export function getPaymentColumns(): ColumnDef<Payment>[] {
  return [
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Payment Type" />
      ),
      cell: ({ row }) => (
        <div className="truncate" title={String(row.getValue("type"))}>
          {row.getValue("type")}
        </div>
      ),
      enablePinning: true,
    },
    {
      accessorKey: "value",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Value" />
      ),
      cell: ({ row }) => (
        <div className="w-40 truncate" title={row.getValue("description")}>
          {formatPrice(row.getValue("value")) || EMPTY_VALUE}
        </div>
      ),
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
      ),
      cell: ({ row }) => (
        <div className="w-40 truncate" title={row.getValue("description")}>
          {row.getValue("description") || EMPTY_VALUE}
        </div>
      ),
      meta: { mobileLabel: "Description" },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue<PaymentStatus>("status");
        return <PaymentBadgeStatus status={status} />;
      },
    },
    {
      accessorKey: "paid_at",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Paid at" />
      ),
      cell: ({ row }) => {
        const paidAt = row.getValue<string>("paid_at");
        return <div className="">{formatDateTime(paidAt)}</div>;
      },
    },
  ];
}
