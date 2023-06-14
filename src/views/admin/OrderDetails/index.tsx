import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import * as Yup from "yup";
import Card from "components/card/Card";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "contexts/AuthContext";

import { useFormik } from "formik";
import { Select } from "components/Select/MainMenu";
import { getUser } from "services/authManager";
import { devices, devicesType } from "../default/services/devicesServices";
import { fetchOrder, orderType } from "./Services/orderServer";
import { useParams } from "react-router-dom";

function ShowOrder() {
  const { id } = useParams();
  console.log(id);
  // Chakra Color Mode
  const { file, action } = useContext(AuthContext);
  const [devicesListData, setDevicesListData] = useState<devicesType>();
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");
  const [orderData, setOrderData] = useState<orderType>();
  const fetchData = async () => {
    const data = await fetchOrder(id);
    if (data) setOrderData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bgList = useColorModeValue("white", "whiteAlpha.100");
  const bgShadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
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
                  Order title
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.title}
                </Card>
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
                  Order description
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.description}
                </Card>
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
                  Order device name
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.device.name}
                </Card>
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
                  Order contact
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.order_contact[0]?.contact_name}
                </Card>
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
                  Order client name
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.client.name}
                </Card>
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
                  Order type
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.order_type}
                </Card>
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
                  Order number
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.order_number}
                </Card>
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
                  Order technical
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.technical.map((t) => (
                    <div>{t.name}</div>
                  ))}
                </Card>
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
                  Order state
                </FormLabel>
                <Card
                  alignItems="center"
                  justifyContent="center"
                  bg={bgButton}
                  _hover={bgHover}
                  _focus={bgFocus}
                  _active={bgFocus}
                  h="37px"
                  w={"full"}
                  borderRadius="10px"
                >
                  {orderData?.state}
                </Card>
              </FormControl>{" "}
            </Flex>{" "}
            <Box>
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
                  fontSize="25px"
                  textAlign="start"
                  fontWeight="700"
                  lineHeight="100%"
                >
                  issue images
                </Text>
                <Stack direction="row">
                  {orderData?.problem_images.map((i) => (
                    <Image boxSize="100px" objectFit="cover" src={i} />
                  ))}
                </Stack>
              </Card>

              <Flex
                direction={{ base: "row", md: "row" }}
                justifyContent={"space-between"}
              ></Flex>
            </Box>
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
export { ShowOrder };
