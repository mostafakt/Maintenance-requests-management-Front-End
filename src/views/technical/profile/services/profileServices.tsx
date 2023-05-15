import axios from "axios";
import { getHeader, getUser } from "services/authManager";

export type TechUpdateTypeParms = {
  identity_image?: string;
  domain: string;
  phone_number: string;
  address: string;
};
export const fetchProfile = async (
  setUser: (val: TechUpdateTypeParms) => void
) => {
  await axios
    .get<TechUpdateTypeParms>(
      process.env.REACT_APP_BACK_END_API_LINK +
        `user/technical_profile/${getUser()}/`,
      {
        headers: getHeader(),
      }
    )
    .then((res) => {
      setUser(res.data);
    });
};
export const editProfile = async (userData: TechUpdateTypeParms) => {
  await axios.put(
    process.env.REACT_APP_BACK_END_API_LINK +
      `user/technical_profile/${getUser()}/`,
    userData,
    {
      headers: getHeader(),
    }
  );
};
