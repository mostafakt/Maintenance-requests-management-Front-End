import axios from "axios";
import { getHeader } from "services/authManager";

export type createOrderType = {
  id: string;
  title: string;
  description: string;
  client: string;
  device: string;
  order_number: string;
  order_contact: string;
  technical: string[];
  problem_images: string[];
};
export const createOrder = async (data: createOrderType) => {
  await axios.post(process.env.REACT_APP_BACK_END_API_LINK + "orders/", data, {
    headers: getHeader(),
  });
};
