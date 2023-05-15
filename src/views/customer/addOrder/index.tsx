import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import * as Yup from "yup";
import Card from "components/card/Card";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "contexts/AuthContext";
import { json } from "react-router-dom";
import {
  createOrder,
  createOrderType,
  orderContactListType,
  orderContactsList,
} from "./services/createOrdersServices";
import { useFormik } from "formik";
import { Select } from "components/Select/MainMenu";
import {
  clientsList,
  clientsListType,
} from "views/admin/customers/services/clientsServices";
import { getUser } from "services/authManager";
import { devices, devicesType } from "../default/services/devicesServices";
import Toaster from "components/Toaster/Toaster";
import Toasters from "components/Toaster/Toaster";

function CreateOrder() {
  // Chakra Color Mode
  const { file } = useContext(AuthContext);
  const [devicesListData, setDevicesListData] = useState<devicesType>();
  const [orderContactsListData, setOrderContactsListData] =
    useState<orderContactListType>();
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");
  const [toast, setToast] = useState<{ state: boolean; text: string }>(
    undefined
  );
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    // order_number: Yup.string().required(),
    device: Yup.string().required(),
    // order_contact: Yup.string().required(),
    // technical: Yup.string().required(),
  });
  const formik = useFormik<createOrderType>({
    initialValues: {
      title: "",
      description: "",
      client: getUser(),
      device: "",

      problem_images: ["497f6eca-6276-4993-bfeb-53cbbbba6f08"],
    },
    onSubmit: async (values) => {
      await createOrder(values);
    },
    validationSchema: validationSchema,
  });
  useEffect(() => {
    // setToast(undefined);
    console.log(toast);
  }, [toast]);

  useEffect(() => {
    devices(setDevicesListData);
    orderContactsList(setOrderContactsListData);
  }, []);

  const onSubmit = async () => {
    // console.log(typeof deviceData?.device_images);
    // console.log(deviceData?.device_images + "   sub");
  };

  return (
    <>
      <Box pt={{ base: "50px", md: "0px" }} mt={{ xl: "70px" }}>
        {/* {toast !== undefined && (
          <Toasters accepted={toast?.state} text={toast?.text} />
        )} */}
        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            order information :
          </Text>
          <FormControl>
            <Flex direction={{ sm: "column", xl: "row" }} gap="15px">
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  description<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={formik?.values?.description}
                  onChange={(val) =>
                    formik.setFieldValue("description", val.target.value)
                  }
                  style={{
                    borderColor: formik.errors.description ? "red" : "",
                  }}
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />
              </FormControl>{" "}
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  title<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={formik?.values?.title}
                  onChange={(val) =>
                    formik.setFieldValue("title", val.target.value)
                  }
                  style={{
                    borderColor: formik.errors.title ? "red" : "",
                  }}
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />
              </FormControl>{" "}
            </Flex>{" "}
            <Flex direction={{ sm: "column", xl: "row" }} gap="15px">
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  devices <Text color={brandStars}>*</Text>
                </FormLabel>
                <Select
                  defaultValue={{ id: "", value: "" }}
                  onChange={(val) => formik.setFieldValue("device", val.id)}
                  options={
                    devicesListData?.results?.map((r) => ({
                      id: r.id,
                      value: r.device_name,
                    })) || []
                  }
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  mb="24px"
                  fontWeight="500"
                  error={formik.errors.device ? true : false}
                />
              </FormControl>{" "}
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  order contacts <Text color={brandStars}>*</Text>
                </FormLabel>
                <Select
                  defaultValue={{ id: "", value: "sss" }}
                  onChange={(val) =>
                    formik.setFieldValue("order_contact", val.id)
                  }
                  options={
                    orderContactsListData?.results?.map((r) => ({
                      id: r.id,
                      value: r.contact_name,
                    })) || []
                  }
                  error={formik.errors.order_contact ? true : false}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  mb="24px"
                  fontWeight="500"
                />
              </FormControl>{" "}
            </Flex>{" "}
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={() => formik.handleSubmit()}
            >
              create order
            </Button>
          </FormControl>
          <Flex
            direction={{ base: "row", md: "row" }}
            justifyContent={"space-between"}
          ></Flex>
        </Card>
      </Box>
    </>
  );
}
export { CreateOrder };
