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
import { Upload } from "./components/Upload";
function AddEvent() {
  // Chakra Color Mode
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");

  return (
    <>
      <Box pt={{ base: "50px", md: "0px" }}>
        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            Your event type:
          </Text>
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Event Title<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              mb="24px"
              fontWeight="500"
              size="lg"
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Location <Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Enter a location..."
                mb="24px"
                size="lg"
                variant="auth"
              />
            </InputGroup>
            <Text as="span" fontWeight="500" ms="4px">
              Location not confirmed?
              <Link
                mx="3px"
                color={textColor}
                href=""
                target="_blank"
                fontWeight="700"
              >
                Set location as "TBC"
              </Link>
            </Text>
            <Flex
              direction={{ base: "column", md: "row", sm: "column" }}
              align="center"
              mb="24px"
            >
              <div>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  display="flex"
                >
                  Event starts at… <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex
                  direction={{ base: "row", md: "row" }}
                  align="center"
                  mb="24px"
                >
                  <InputGroup maxWidth={"120px"} size="md">
                    <Input
                      isRequired={true}
                      fontSize="sm"
                      mb="24px"
                      size="sm"
                      variant="auth"
                      placeholder={"11 MAr"}
                    />
                    <InputLeftElement>
                      <CalendarIcon
                        mb={"5px"}
                        color={textColorSecondary}
                        _hover={{ cursor: "pointer" }}
                      />
                    </InputLeftElement>
                  </InputGroup>
                  <Text
                    as="span"
                    fontWeight="500"
                    ms="4px"
                    m={"17px"}
                    mb={"38px"}
                  >
                    at
                  </Text>
                  <InputGroup maxWidth={"120px"} size="md">
                    <Input
                      isRequired={true}
                      fontSize="sm"
                      mb="24px"
                      size="sm"
                      variant="auth"
                      placeholder={"4:00"}
                    />
                    <InputLeftElement>
                      <TimeIcon
                        mb={"5px"}
                        color={textColorSecondary}
                        _hover={{ cursor: "pointer" }}
                      />
                    </InputLeftElement>
                  </InputGroup>
                </Flex>
              </div>
              <Text as="span" fontWeight="500" ms="4px" m={"17px"} mb={"38px"}>
                until
              </Text>
              <div>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  display="flex"
                >
                  Event ends at… <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex
                  direction={{ base: "row", md: "row" }}
                  align="center"
                  mb="24px"
                >
                  <InputGroup maxWidth={"120px"} size="md">
                    <Input
                      isRequired={true}
                      fontSize="sm"
                      mb="24px"
                      size="sm"
                      variant="auth"
                      placeholder={"11 MAr"}
                    />
                    <InputLeftElement>
                      <CalendarIcon
                        mb={"5px"}
                        color={textColorSecondary}
                        _hover={{ cursor: "pointer" }}
                      />
                    </InputLeftElement>
                  </InputGroup>
                  <Text
                    as="span"
                    fontWeight="500"
                    ms="4px"
                    m={"17px"}
                    mb={"38px"}
                  >
                    at
                  </Text>
                  <InputGroup maxWidth={"120px"} size="md">
                    <Input
                      isRequired={true}
                      fontSize="sm"
                      mb="24px"
                      size="sm"
                      variant="auth"
                      placeholder={"4:00"}
                    />
                    <InputLeftElement>
                      <TimeIcon
                        mb={"5px"}
                        color={textColorSecondary}
                        _hover={{ cursor: "pointer" }}
                      />
                    </InputLeftElement>
                  </InputGroup>
                </Flex>
              </div>
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
                Event Details
              </Text>
              <Upload
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
            >
              Save & Add a ticket
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
export { AddEvent };
