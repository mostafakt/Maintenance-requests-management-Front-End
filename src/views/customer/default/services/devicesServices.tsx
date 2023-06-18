import axios from "axios";
import { getHeader, getToken, getUser } from "services/authManager";

export type devicesType = {
  count: number;
  next: string;
  previous: string;
  results: {
    id: string;
    user: string;
    device_name: string;
    serial_number: string;
    manufacturing_date: string;
    device_model: string;
    device_type: string;
    work_rate: string;
    device_images: {
      id: string;
      image: string;
    }[];
  }[];
};
export const devices = async (
  SetData: (val: devicesType) => void,
  page: number,
  perPage: number
) => {
  await axios
    .get(
      process.env.REACT_APP_BACK_END_API_LINK +
        `devices/user-devices/${getUser()}/`,
      {
        params: { page_size: 2, page: 1 },
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};
