import axios from "axios";
import { getHeader } from "services/authManager";

export type orderType = {
  id: string;
  title: string;
  state: string;
  description: string;
  order_work_status: string;
  order_type: string;
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
  order_contact: {
    id: string;
    client: {
      id: string;
      name: string;
    };
    orders: string[];
    contact_name: string;
    availability_date: string;
    visit_date: string;
    location: string;
  }[];
  problem_images: {
    id: string;
    order: string;
    comment: string;
    image: string;
  }[];
};

export const fetchOrder = async (id: string) => {
  const data = await axios.get<orderType>(
    process.env.REACT_APP_BACK_END_API_LINK + `orders/${id}/`,
    {
      headers: getHeader(),
    }
  );
  return data.data;
};
