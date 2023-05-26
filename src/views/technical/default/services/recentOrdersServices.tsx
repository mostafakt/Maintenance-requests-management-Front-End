/* eslint-disable no-useless-concat */
import axios from "axios";

import { getHeader } from "services/authManager";
export type TechnicalProfile = {
  identity_image: string;
  domain: string;
  phone_number: string;
  address: string;
  technical: string;
  orders: {
    id: string;
    client_id: string;
    device_id: string;
    title: string;
    state: string;
    description: string;
    order_number: string;
    add_date: string;
  }[];
  name: string;
  email: string;
};
export const getTechnicalInfo = async (id: string) => {
  let data: TechnicalProfile;
  if (id) {
    await axios
      .get<TechnicalProfile>(
        process.env.REACT_APP_BACK_END_API_LINK +
          "user/technical_profile/" +
          `${id}/`,
        {
          headers: getHeader(),
        }
      )
      .then((val) => {
        data = val.data;
        console.log(data);
      });
    return data;
  }
};
