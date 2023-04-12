import axios from "axios";
import { getHeader, getUser } from "services/authManager";

export type userRes = {
  company_name: string;
  manager: string;
  technical_manger: string;
  address: string;
  phone_number: string;
  manager_mobile: string;
  email: string;
  website: string;
  facebook: string;
  serial_number: string;
  logo: string;
};
export const fetchProfile = async (setUser: (val: userRes) => void) => {
  await axios
    .get<userRes>(
      process.env.REACT_APP_BACK_END_API_LINK +
        `user/client_profile/${getUser()}/`,
      {
        headers: getHeader(),
      }
    )
    .then((res) => {
      setUser(res.data);
    });
};
export const editProfile = async (userData: userRes) => {
  await axios.put(
    process.env.REACT_APP_BACK_END_API_LINK +
      `user/client_profile/${getUser()}/`,
    userData,
    {
      headers: getHeader(),
    }
  );
};
