import axios from "axios";
import { getHeader, getToken } from "services/authManager";

export type recentOrdersList = {
  count: number;
  next: string;
  previous: string;
  results: {
    id: string;
    title: string;
    state: string;
    description: string;
    client: {
      id: string;
      name: string;
    };
    device: {
      id: string;
      name: string;
    };
    order_number: string;
    technical: {
      id: string;
      name: string;
    }[];
    order_contact: string[];
    problem_images: string[];
  }[];
};
export const recentOrders = async (
  SetData: (val: recentOrdersList) => void
) => {
  await axios
    .get<recentOrdersList>(
      process.env.REACT_APP_BACK_END_API_LINK + "orders/",
      {
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};
