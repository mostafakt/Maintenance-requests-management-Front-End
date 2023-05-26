import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { Upload } from "./components/Upload";
import { useState, useContext, useEffect } from "react";
import { postDevice } from "./services/addDeviceService";
import { AuthContext } from "contexts/AuthContext";
import { json } from "react-router-dom";
export type deviceData = {
  device_name: string;
  serial_number: string;
  manufacturing_date: string;
  device_model: string;
  device_type: string;
  work_rate: string;
  device_images: any[];
};
function AddDevice() {
  // Chakra Color Mode
  const { file, action } = useContext(AuthContext);

  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");
  const [deviceData, setDeviceData] = useState<deviceData>({
    device_name: "string",
    serial_number: `${Math.random()}sdasd${Math.random()}`,
    manufacturing_date: "2019-08-24T14:15:22Z",
    device_model: "string",
    device_type: "string",
    work_rate: "string",
    device_images: [],
  });
  const formData = new FormData();

  const onSubmit = async () => {
    // console.log(typeof deviceData?.device_images);
    // console.log(deviceData?.device_images + "   sub");

    await formData.append("device_name", deviceData.device_name);
    await formData.append("serial_number", deviceData.serial_number);
    await formData.append("manufacturing_date", deviceData.manufacturing_date);
    await formData.append("device_model", deviceData.device_model);
    await formData.append("device_type", deviceData.device_type);
    await formData.append("work_rate", deviceData.work_rate);
    //@ts-ignore
    await deviceData?.device_images?.map((e, index) => {
      formData.append(`device_images[${index}]`, e);
    });
    console.log(formData);
    await postDevice(formData);
  };
  useEffect(() => {
    if (file) {
      // console.log(file);

      setDeviceData({
        ...deviceData,
        device_images: [...deviceData.device_images, file],
      });
    }
  }, [file]);

  useEffect(() => {
    action.addFile(undefined);
    return () => action.addFile(undefined);
  }, []);

  const deleteImage = async (index?: number) => {
    let temp = await deviceData.device_images;
    temp = temp.slice(0, index).concat(temp.slice(index + 1));
    console.log(temp);

    setDeviceData({
      ...deviceData,
      device_images: temp,
    });
  };
  return (
    <>
      <Box pt={{ base: "50px", md: "0px" }} mt={{ xl: "70px" }}>
        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            Your device information :
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
                  device name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={deviceData?.device_name}
                  onChange={(e) => {
                    setDeviceData({
                      ...deviceData,
                      device_name: e.target.value,
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
                  device model<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={deviceData?.device_model}
                  onChange={(e) => {
                    setDeviceData({
                      ...deviceData,
                      device_model: e.target.value,
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
                  device type<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={deviceData?.device_type}
                  onChange={(e) => {
                    setDeviceData({
                      ...deviceData,
                      device_type: e.target.value,
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
            </Flex>
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
                  manufacturing date<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={deviceData?.manufacturing_date}
                  onChange={(e) => {
                    setDeviceData({
                      ...deviceData,
                      manufacturing_date: e.target.value,
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
                  serial number<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={deviceData?.serial_number}
                  onChange={(e) => {
                    setDeviceData({
                      ...deviceData,
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
                  work rate<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={deviceData?.work_rate}
                  onChange={(e) => {
                    setDeviceData({
                      ...deviceData,
                      work_rate: e.target.value,
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
                Device images
              </Text>
              <Flex direction={{ md: "column", xl: "row" }} gap={"5px"}>
                {deviceData?.device_images?.map((e, index) => {
                  const imageUrl = URL.createObjectURL(e);
                  return (
                    <Image
                      borderRadius={"20px"}
                      width={"100px"}
                      height={"100px"}
                      src={imageUrl}
                      onClick={() => deleteImage(index)}
                    />
                  );
                })}
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

            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={onSubmit}
            >
              add the device
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
export { AddDevice };
