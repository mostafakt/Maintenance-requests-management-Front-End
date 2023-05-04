import axios from "axios";
import { getHeader } from "services/authManager";

export type clientsListType = {
  count: number;
  next: string;
  previous: string;
  results: {
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
  }[];
};
export const clientsList = async (SetData: (val: clientsListType) => void) => {
  await axios
    .get<clientsListType>(
      process.env.REACT_APP_BACK_END_API_LINK + "user/client_profile/",
      {
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};
