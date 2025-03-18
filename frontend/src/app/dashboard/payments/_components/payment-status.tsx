import { cn } from "@/lib/utils";
import { Loader, CircleCheckBig, Ban } from "lucide-react";
import type { PaymentStatus as PaymentBadgeStatus } from "../_types/payment-type";
import { capitalize } from "@/lib/capitalize";
import { Badge } from "@/components/atoms/badge";

export type PaymentBadgeStatusProps = {
  status: PaymentBadgeStatus;
  className?: string;
};

export const STATUS_CONDIG: Record<
  PaymentBadgeStatus,
  { bg: string; text: string; icon: React.ReactNode }
> = {
  pending: {
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-500/10 dark:to-yellow-600/25",
    text: "text-yellow-800 dark:text-yellow-100",
    icon: <Loader className="w-4 h-4 mr-1" />,
  },
  success: {
    bg: "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-500/10 dark:to-green-600/25",
    text: "text-green-800 dark:text-green-100",
    icon: <CircleCheckBig className="w-4 h-4 mr-1" />,
  },
  failed: {
    bg: "bg-gradient-to-r from-red-100 to-red-200 dark:from-red-500/10 dark:to-red-600/25",
    text: "text-red-800 dark:text-red-100",
    icon: <Ban className="w-4 h-4 mr-1" />,
  },
};

const PaymentBadgeStatus = ({ status, className }: PaymentBadgeStatusProps) => {
  const { bg, text, icon } = STATUS_CONDIG[status];

  return (
    <Badge
      className={cn(
        "flex items-center px-3 py-1 rounded-md text-sm font-medium min-w-28 justify-between",
        bg,
        text,
        className
      )}
    >
      {capitalize(status)}
      {icon}
    </Badge>
  );
};

export default PaymentBadgeStatus;
