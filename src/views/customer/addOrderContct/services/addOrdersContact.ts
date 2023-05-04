import axios from "axios";
import { getHeader } from "services/authManager";

export type createOrderContactType = {
  id?: string;
  contact_name: string;
  availability_date: string;
  visit_date: string;
  location: string;
  orders?: string[];
};
export const createOrderContact = async (data: createOrderContactType) => {
  await axios.post(
    process.env.REACT_APP_BACK_END_API_LINK + "orders/order-contact/",
    data,
    {
      headers: getHeader(),
    }
  );
};
