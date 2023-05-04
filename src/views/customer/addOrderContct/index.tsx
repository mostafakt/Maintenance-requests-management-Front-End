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
import Card from "components/card/Card";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "contexts/AuthContext";
import { json } from "react-router-dom";
import {
  createOrderContact,
  createOrderContactType,
} from "./services/addOrdersContact";
export type deviceData = {
  device_name: string;
  serial_number: string;
  manufacturing_date: string;
  device_model: string;
  device_type: string;
  work_rate: string;
  device_images: any[];
};
function CreateOrderContact() {
  // Chakra Color Mode
  const { file } = useContext(AuthContext);

  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");
  const [createOrderContactData, setCreateOrderContactData] =
    useState<createOrderContactType>({
      contact_name: "string",
      availability_date: "2019-08-24 14:15:22",
      visit_date: "2019-08-24 14:15:22",
      location: "string",
    });

  const onSubmit = async () => {
    // console.log(typeof deviceData?.device_images);
    // console.log(deviceData?.device_images + "   sub");

    await createOrderContact(createOrderContactData);
  };

  return (
    <>
      <Box pt={{ base: "50px", md: "0px" }} mt={{ xl: "70px" }}>
        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            contact order information :
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
                  contact name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={createOrderContactData?.contact_name}
                  onChange={(e) => {
                    setCreateOrderContactData({
                      ...createOrderContactData,
                      contact_name: e.target.value,
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
                  availability date<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={createOrderContactData?.availability_date}
                  onChange={(e) => {
                    setCreateOrderContactData({
                      ...createOrderContactData,
                      availability_date: e.target.value,
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
                  visit date<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={createOrderContactData?.visit_date}
                  onChange={(e) => {
                    setCreateOrderContactData({
                      ...createOrderContactData,
                      visit_date: e.target.value,
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
                  location<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={createOrderContactData?.location}
                  onChange={(e) => {
                    setCreateOrderContactData({
                      ...createOrderContactData,
                      location: e.target.value,
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
              </FormControl>{" "}
            </Flex>
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={onSubmit}
            >
              create order Contact
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
export { CreateOrderContact };
