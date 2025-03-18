export const formatDateTime = (date: string | Date): string =>
  new Date(date).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("en-US").format(value);

export const EMPTY_VALUE = "-";
