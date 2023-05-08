import axios from "axios";
import { getHeader, getToken } from "services/authManager";
export type orderType = {
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
  problem_images: string[];
};

export type recentOrdersList = {
  count: number;
  next: string;
  previous: string;
  results: orderType[];
};
export const recentOrders = async (
  SetData: (val: recentOrdersList) => void,
  filter?: string
) => {
  await axios
    .get<recentOrdersList>(
      process.env.REACT_APP_BACK_END_API_LINK + "orders/",
      {
        params: { state: filter },
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};

export type updateOrder = {
  id: string;
  title: string;
  description: string;
  client: string;
  device: string;
  order_number: string;
  order_contact: string;
  technical: string[];
  problem_images: string[];
  state: string;
};
export const updateOrderService = async (data: updateOrder) => {
  const id = data.id;
  delete data["id"];
  await axios.put(
    process.env.REACT_APP_BACK_END_API_LINK + "orders/" + `${id}/`,
    data,
    {
      headers: getHeader(),
    }
  );
};
export type patchOrder = {
  id?: string;
  title?: string;
  description?: string;
  client?: string;
  device?: string;
  order_number?: string;
  order_contact?: string;
  technical?: string[];
  problem_images?: string[];
  state?: string;
};
export const patchOrderService = async (data: patchOrder) => {
  const id = data.id;
  delete data["id"];
  await axios.patch(
    process.env.REACT_APP_BACK_END_API_LINK + "orders/" + `${id}/`,
    data,
    {
      headers: getHeader(),
    }
  );
};
export type getOrderType = {
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
  technical: string[];
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
  problem_images: string[];
};

export const getOrder = async (
  id: string,
  SetData: (val: getOrderType) => void
) => {
  await axios
    .get<getOrderType>(
      process.env.REACT_APP_BACK_END_API_LINK + "orders/" + `${id}/`,
      {
        // params: { id: id },
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};
