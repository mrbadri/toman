import { type Table as TanstackTable } from "@tanstack/react-table";
import type * as React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/atoms/card";
import { flexRender } from "@tanstack/react-table";

interface DataCardProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The table instance returned from useDataTable hook with pagination, sorting, filtering, etc.
   * @type TanstackTable<TData>
   */
  table: TanstackTable<TData>;
}

export function DataCard<TData>({
  table,
  children,
  className,
  ...props
}: DataCardProps<TData>) {
  return (
    <div
      className={cn("w-full space-y-2.5 overflow-auto", className)}
      {...props}
    >
      {children}

      {/* Mobile Layout (Cards) - visible below md breakpoint */}
      <div>
        {table.getRowModel().rows?.length ? (
          <div className="grid gap-4">
            {table.getRowModel().rows.map((row, index) => {
              const metaTable = table?.options?.meta;
              const onRowClick = metaTable?.onRowClick;
              const MobileRowComponent = metaTable?.mobileRowComponent;

              if (MobileRowComponent) {
                return (
                  <MobileRowComponent
                    onClick={() => {
                      onRowClick?.(row.original);
                      console.log("---------- click innner");
                    }}
                    key={index}
                    row={row}
                  />
                );
              }

              // TODO: Enhance UI
              return (
                <Card
                  key={index}
                  className={cn(
                    "cursor-pointer hover:shadow-md transition-shadow bg-card text-card-foreground",
                    {
                      "border-primary shadow-md": row.getIsSelected(),
                    }
                  )}
                  onClick={() => onRowClick?.(row.original)}
                >
                  <CardContent className="p-4">
                    <div className="grid gap-3">
                      {row.getVisibleCells().map((cell) => {
                        const label =
                          (cell.column.columnDef.meta?.mobileLabel as string) ||
                          (typeof cell.column.columnDef.header === "string"
                            ? cell.column.columnDef.header
                            : cell.column.id);

                        //  TODO: Improve UI
                        return (
                          <div
                            key={cell.id}
                            className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 items-start"
                          >
                            {/* Label */}
                            <span
                              className={cn(
                                "font-medium text-muted-foreground text-sm",
                                "min-w-[60px] max-w-[100px] truncate" // Control label width
                              )}
                            >
                              {label}:
                            </span>
                            {/* Value */}
                            <span className="text-foreground text-sm break-words">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="h-24 flex items-center justify-center text-muted-foreground">
            No results.
          </div>
        )}
      </div>

      {/* <div className="flex flex-col gap-2.5">
        <DataCardPagination table={table} />
        {table.getFilteredSelectedRowModel().rows.length > 0 && floatingBar}
      </div> */}
    </div>
  );
}
