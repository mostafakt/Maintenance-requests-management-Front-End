import axios from "axios";
import { getHeader } from "services/authManager";
import { toast } from "react-toastify";
type issueImage = {
  problem_images: string[];
  comments: string[];
};
export const postImage = async (data: any) => {
  await axios
    .post(
      process.env.REACT_APP_BACK_END_API_LINK + "orders/order-problem-images",
      data,
      {
        headers: getHeader(true),
      }
    )
    .then(() => {
      // eslint-disable-next-line no-lone-blocks
      {
        toast.success("succses");
      }
    })
    .catch((e) => {
      toast.error(`${JSON.stringify(e.response.data)}`);
    });
};
