import axios from "axios";
import { getHeader } from "services/authManager";

export type createOrderType = {
  id?: string;
  title: string;
  description: string;
  client: string;
  device: string;
  order_number?: string;
  order_contact?: string;
  technical?: string[];
  problem_images: string[];
};
export type orderContactListType = {
  count: number;
  next: string;
  previous: string;
  results: {
    id: string;
    contact_name: string;
    availability_date: string;
    visit_date: string;
    location: string;
    orders: string[];
  }[];
};
export const createOrder = async (data: createOrderType) => {
  await axios.post(process.env.REACT_APP_BACK_END_API_LINK + "orders/", data, {
    headers: getHeader(),
  });
};
export const orderContactsList = async (
  SetData: (val: orderContactListType) => void
) => {
  await axios
    .get<orderContactListType>(
      process.env.REACT_APP_BACK_END_API_LINK + "orders/order-contact/",
      {
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};
