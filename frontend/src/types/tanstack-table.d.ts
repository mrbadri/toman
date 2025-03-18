import type { Row, RowData } from "@tanstack/react-table";

// row: Row<TData>;
// onClick: () => void;
// className?: string;
export interface MobileRowComponentProps<TData extends RowData = RowData> {
  row: Row<TData>;
  onClick: () => void;
  className?: string;
}

declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    onRowClick?: (row: TData) => void;
    mobileRowComponent?: React.ComponentType<MobileRowComponentProps<TData>>;
  }

  // ColumnMeta
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    mobileLabel?: string;
  }
}
