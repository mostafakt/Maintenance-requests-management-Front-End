import axios from "axios";
import { getHeader } from "services/authManager";
import { deviceData } from "..";
import { toast } from "react-toastify";

export const postDevice = async (data: any) => {
  await axios
    .post(
      process.env.REACT_APP_BACK_END_API_LINK + "devices/user-devices",
      data,
      {
        headers: getHeader(true),
      }
    )
    .then(() => {
      {
        toast.success("succses");
      }
    })
    .catch((e) => {
      toast.error(`${JSON.stringify(e.response.data)}`);
    });
};
