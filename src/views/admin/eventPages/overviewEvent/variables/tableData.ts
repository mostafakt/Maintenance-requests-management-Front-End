type RowObj = {
  Customer: string;
  Order: string;
  Event: string;
  Qty: string;
};

const eventTableData: { sales: string; Revenue: string; time: string }[] = [
  {
    sales: "1",
    Revenue: "£0.00",
    time: "Today",
  },
  {
    sales: "1",
    Revenue: "£0.00",
    time: "yesterday",
  },
  {
    sales: "1",
    Revenue: "£0.00",
    time: "last 7 days",
  },
  {
    sales: "1",
    Revenue: "£0.00",
    time: "All times",
  },
];
export { eventTableData };
