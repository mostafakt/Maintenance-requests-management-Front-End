import axios from "axios";
import Toaster from "components/Toaster/Toaster";
import { toast } from "react-toastify";
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
export const createOrder = async (
  data: createOrderType,
  setToast?: (val: { state: boolean; text: string }) => void
) => {
  await axios
    .post(process.env.REACT_APP_BACK_END_API_LINK + "orders/", data, {
      headers: getHeader(),
    })
    .then(() => {
      {
        toast.success("succses");
      }
    })
    .catch((e) => {
      toast.error(`${JSON.stringify(e.response.data)}`);
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
