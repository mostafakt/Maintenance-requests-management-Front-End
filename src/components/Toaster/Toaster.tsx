import { useEditable } from "@chakra-ui/react";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toasters = ({
  accepted,
  text,
  setToast,
}: {
  accepted: boolean;
  text?: string;
  setToast?: (value: { state: boolean; text: string }) => void;
}) => {
  return (
    <div>
      {accepted ? (
        <div>
          {toast.success("succses", { onClose: () => setToast(undefined) })}
        </div>
      ) : (
        <div>{toast.error(text, { onClose: () => setToast(undefined) })}</div>
      )}
    </div>
  );
};

export default Toasters;
