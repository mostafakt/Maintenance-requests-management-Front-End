import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import * as Yup from "yup";
import Card from "components/card/Card";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "contexts/AuthContext";
import {
  createOrder,
  createOrderType,
  orderContactListType,
  orderContactsList,
} from "./services/createOrdersServices";
import { useFormik } from "formik";
import { Select } from "components/Select/MainMenu";
import { getUser } from "services/authManager";
import { devices, devicesType } from "../default/services/devicesServices";
import { Upload } from "../addDevice/components/Upload";
import { postImage } from "./services/issueImageService";

function CreateOrder() {
  // Chakra Color Mode
  const { file, action } = useContext(AuthContext);
  const [devicesListData, setDevicesListData] = useState<devicesType>();
  const [orderContactsListData, setOrderContactsListData] =
    useState<orderContactListType>();
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");

  const validationSchema = Yup.object().shape({
    // title: Yup.string().required(),
    // description: Yup.string().required(),
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
      order_work_status: "Normal Workday Hours",
      order_type: "Service Order",
      problem_images: [],
    },
    onSubmit: async (values) => {
      let postData = await onSubmit();
      let lastData = values;
      lastData.problem_images = postData.problem_images;
      await createOrder(lastData);
    },
    validationSchema: validationSchema,
  });

  useEffect(() => {
    action.addFile(undefined);
    devices(setDevicesListData, 1, 5);
    orderContactsList(setOrderContactsListData);
    return () => action.addFile(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [imageIssueData, setImageIssueData] = useState<{
    comments: string[];
    problem_images: any[];
  }>({
    comments: [],
    problem_images: [],
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formData = new FormData();

  const onSubmit = async () => {
    // eslint-disable-next-line array-callback-return
    await imageIssueData?.comments?.map((e, index) => {
      formData.append(`comments[${index}]`, imageIssueData.comments[index]);
    });
    //@ts-ignore
    // eslint-disable-next-line array-callback-return
    await imageIssueData?.problem_images?.map((e, index) => {
      formData.append(`problem_images[${index}]`, e);
    });

    const postData = await postImage(formData);
    return postData;
  };
  useEffect(() => {
    if (file) {
      setImageIssueData({
        ...imageIssueData,
        problem_images: [...imageIssueData.problem_images, file],
        comments: [...imageIssueData.comments, ""],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const deleteImage = async (index?: number) => {
    let temp = await imageIssueData.problem_images;
    temp = temp.slice(0, index).concat(temp.slice(index + 1));
    console.log(temp);

    setImageIssueData({
      ...imageIssueData,
      problem_images: temp,
    });
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
                  order type<Text color={brandStars}>*</Text>
                </FormLabel>
                <Select
                  defaultValue={{ id: "", value: "" }}
                  onChange={(val) => formik.setFieldValue("order_type", val.id)}
                  options={[
                    {
                      id: "Service Order",
                      value: "Service Order",
                    },
                    {
                      id: "Inspection Order",
                      value: "Inspection Order",
                    },
                    {
                      id: "Service Content Emergency Order",
                      value: "Service Content Emergency Order",
                    },
                  ]}
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
                  order work status<Text color={brandStars}>*</Text>
                </FormLabel>
                <Select
                  defaultValue={{ id: "", value: "" }}
                  onChange={(val) =>
                    formik.setFieldValue("order_work_status", val.id)
                  }
                  options={[
                    {
                      id: "Normal Workday Hours",
                      value: "Normal Workday Hours",
                    },
                    {
                      id: "Weekend Hours",
                      value: "Weekend Hours",
                    },
                    { id: "Urgent Request", value: "Urgent Request" },
                  ]}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  mb="24px"
                  fontWeight="500"
                  error={formik.errors.device ? true : false}
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
                  defaultValue={{ id: "", value: "" }}
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
            <Box>
              <Card mb={{ base: "0px", "2xl": "20px" }}>
                <Text
                  color={textColor}
                  fontSize="2xl"
                  ms="24px"
                  fontWeight="700"
                >
                  Your Issue information :
                </Text>
                <FormControl>
                  <Card
                    bg={bg}
                    display={"flex"}
                    justifyItems={"center"}
                    justifyContent={"center"}
                    alignItems="flex-start"
                    gap={"15px"}
                  >
                    <Text
                      color={textColor}
                      fontSize="34px"
                      textAlign="start"
                      fontWeight="700"
                      lineHeight="100%"
                    >
                      issue images
                    </Text>
                    <Flex direction={{ md: "column", xl: "row" }}>
                      <Flex
                        direction={{ sm: "column", xl: "column" }}
                        gap="15px"
                      >
                        {imageIssueData?.problem_images?.map((e, index) => {
                          const imageUrl = URL.createObjectURL(e);

                          return (
                            <Flex direction={"row"} gap={"5px"}>
                              <Image
                                borderRadius={"20px"}
                                cursor={"pointer"}
                                width={"100px"}
                                height={"100px"}
                                src={imageUrl}
                                onClick={() => deleteImage(index)}
                              />
                              <FormControl>
                                <FormLabel
                                  display="flex"
                                  ms="4px"
                                  fontSize="sm"
                                  fontWeight="500"
                                  color={textColor}
                                  mb="8px"
                                >
                                  issue comment{" "}
                                  <Text color={brandStars}>*</Text>
                                </FormLabel>
                                <>
                                  <Input
                                    value={imageIssueData?.comments[index]}
                                    onChange={(e) => {
                                      let commentsList =
                                        imageIssueData?.comments;
                                      commentsList[index] = e.target.value;
                                      setImageIssueData({
                                        ...imageIssueData,
                                        comments: commentsList,
                                      });
                                    }}
                                    isRequired={true}
                                    variant="auth"
                                    fontSize="sm"
                                    ms={{ base: "0px", md: "0px" }}
                                    mb="24px"
                                    fontWeight="500"
                                    size="lg"
                                  />
                                </>
                              </FormControl>
                            </Flex>
                          );
                        })}
                      </Flex>
                    </Flex>

                    <Upload
                      //@ts-ignore

                      maxW={"500px"}
                      justifyItems={"center"}
                      justifyContent={"center"}
                      gridArea={{
                        base: "3 / 1 / 4 / 2",
                        lg: "1 / 3 / 2 / 4",
                      }}
                      minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
                      pe="20px"
                      pb={{ base: "100px", lg: "20px" }}
                    />
                    <Text as="span" fontWeight="500" ms="4px">
                      By continuing you are agreeing to Eventcube's
                      <Link
                        mx="3px"
                        color={LinkColor}
                        href=""
                        target="_blank"
                        fontWeight="700"
                      >
                        Terms & Conditions
                      </Link>
                      and
                      <Link
                        mx="3px"
                        color={LinkColor}
                        href=""
                        target="_blank"
                        fontWeight="700"
                      >
                        Privacy Policy
                      </Link>
                    </Text>
                  </Card>
                </FormControl>
                <Flex
                  direction={{ base: "row", md: "row" }}
                  justifyContent={"space-between"}
                ></Flex>
              </Card>
            </Box>
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
