import axios from "axios";
import { getHeader } from "services/authManager";
import { deviceData } from "..";

export const postDevice = async (data: any) => {
  await axios.post(
    process.env.REACT_APP_BACK_END_API_LINK + "devices/user-devices",
    data,
    {
      headers: getHeader(true),
    }
  );
};
