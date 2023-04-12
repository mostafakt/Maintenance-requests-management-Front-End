type RowObj = {
  Customer: string;
  Order: string;
  Event: string;
  Qty: string;
};
const tableData: RowObj[] = [
  {
    Customer: "mostafa",
    Order: "test",
    Event: "test",
    Qty: "test",
  },
  {
    Customer: "mostafa",
    Order: "test",
    Event: "test",
    Qty: "test",
  },
  {
    Customer: "mostafa",
    Order: "test",
    Event: "test",
    Qty: "test",
  },
  {
    Customer: "mostafa",
    Order: "test",
    Event: "test",
    Qty: "test",
  },
];
const eventTableData: { event: string; price: string }[] = [
  {
    event: "test",
    price: "£0.00",
  },
];
export { tableData, eventTableData };
