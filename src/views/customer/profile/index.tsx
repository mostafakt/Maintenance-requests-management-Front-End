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
import { editProfile, fetchProfile, userRes } from "./services/profileServices";
export type deviceData = {
  device_name: string;
  serial_number: string;
  manufacturing_date: string;
  device_model: string;
  device_type: string;
  work_rate: string;
  device_images: any[];
};
function Profile() {
  // Chakra Color Mode
  const { file } = useContext(AuthContext);

  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");
  const [userData, setUserDat] = useState<userRes>();
  const [deviceData, setDeviceData] = useState<deviceData>({
    device_name: "string",
    serial_number: `${Math.random()}sdasd${Math.random()}`,
    manufacturing_date: "2019-08-24T14:15:22Z",
    device_model: "string",
    device_type: "string",
    work_rate: "string",
    device_images: [],
  });
  const [disabled, setDisabled] = useState(true);
  const formData = new FormData();

  const onSubmit = async () => {
    await editProfile(userData);
  };

  useEffect(() => {
    fetchProfile(setUserDat);
  }, []);

  return (
    <>
      <Box pt={{ base: "50px", md: "0px" }} mt={{ xl: "70px" }}>
        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Flex justifyContent={"space-between"}>
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              Your profile information :
            </Text>

            <Button onClick={() => setDisabled(!disabled)}>Edit</Button>
          </Flex>
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
                  email<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.email}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      email: e.target.value,
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
                  address<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={userData?.address}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      address: e.target.value,
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
              </FormControl>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  company_name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.company_name}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      company_name: e.target.value,
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
              </FormControl>
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
                  facebook<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.facebook}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      facebook: e.target.value,
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
                  manager<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.manager}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      manager: e.target.value,
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
              </FormControl>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  phone number<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.phone_number}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      phone_number: e.target.value,
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
              </FormControl>
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
                  serial number<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.serial_number}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      serial_number: e.target.value,
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
                  technical manger<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.technical_manger}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      technical_manger: e.target.value,
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
              </FormControl>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  website<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.website}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      website: e.target.value,
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
              </FormControl>
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
                  manager mobile<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  disabled={disabled}
                  value={userData?.manager_mobile}
                  onChange={(e) => {
                    setUserDat({
                      ...userData,
                      manager_mobile: e.target.value,
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
                profile images
              </Text>

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
            <Button
              disabled={disabled}
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={onSubmit}
            >
              update your infos
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
export { Profile };
