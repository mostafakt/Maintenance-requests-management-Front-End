import axios from "axios";
import { getHeader } from "services/authManager";

export type technicalsListType = {
  count: number;
  next: number;
  previous: number;
  results: {
    identity_image: string;
    domain: string;
    phone_number: string;
    address: string;
    technical: string;
    orders: string[];
    name: string;
    email: string;
  }[];
};

export const technicalList = async (
  SetData: (val: technicalsListType) => void
) => {
  await axios
    .get<technicalsListType>(
      process.env.REACT_APP_BACK_END_API_LINK + "user/technical_profile/",
      {
        headers: getHeader(),
      }
    )
    .then((val) => {
      SetData(val.data);
    });
};
