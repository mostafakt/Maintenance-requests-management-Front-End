// Chakra imports
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
// Assets
import { Link } from "react-router-dom";
import { useState } from "react";
function TicketCard(props: {
  eventTitle: string;
  hostName: string;
  total: string;
  soled: string;
  avalable: string;
  status: string;
  image: string;
  description: string;
  ticketID: string;
  ticketIncludes: string;
  bookingFee: string;
  priceToCustome: string;
  created: string;
  [x: string]: any;
}) {
  const {
    created,
    eventTitle,
    hostName,
    total,
    soled,
    avalable,
    status,
    bookingFee,
    image,
    description,
    ticketID,
    ticketIncludes,
    priceToCustome,
    ...rest
  } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("secondaryGray.100", "navy.700");
  const sideBg = useColorModeValue("white", "navy.650");
  const [expanded, setExpanded] = useState(false);
  const secoundboxBg = useColorModeValue("white", "whiteAlpha.100");

  return (
    <Card bg={bg} {...rest} p="14px" onClick={() => setExpanded(!expanded)}>
      <Flex direction={"column"} gap={"15px"}>
        <Flex
          pb={"10px"}
          justifyContent={"space-between"}
          align="center"
          direction={{ base: "column", md: "row" }}
          borderBottom={expanded ? "1px" : "0px"}
          borderColor={"rgba(135, 140, 189, 0.3)"}
        >
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Image
              h="80px"
              w="80px"
              src={image}
              border={"1px"}
              borderColor={"rgba(135, 140, 189, 0.3)"}
              borderRadius="8px"
              me="20px"
            />
            <Box mt={{ base: "10px", md: "0" }}>
              <Text
                color={textColorPrimary}
                fontWeight="500"
                fontSize="md"
                mb="4px"
              >
                {eventTitle}
              </Text>{" "}
              <Text
                display={"inline"}
                fontWeight="500"
                color={brandColor}
                fontSize="sm"
                mr={1}
              >
                E-Ticket
              </Text>
            </Box>
          </Flex>
          <Flex
            align="center"
            direction={{ base: "column", md: "row" }}
            border={"1px"}
            borderRadius={"10px"}
            borderColor={"rgba(135, 140, 189, 0.3)"}
            bg={sideBg}
          >
            <Flex
              alignItems={"center"}
              borderRight={{ base: "0px", md: "1px" }}
              borderBottom={{ base: "1px", md: "0px" }}
              width={{ base: "100%", md: "auto" }}
              height={{ md: "100%", base: "auto" }}
              direction={{ base: "column", md: "column" }}
              p={"10px"}
              borderColor={{
                base: "rgba(135, 140, 189, 0.3)",
                md: "rgba(135, 140, 189, 0.3)",
              }}
            >
              <Text
                fontWeight="800"
                color={textColorSecondary}
                fontSize="3xl"
                me="4px"
              >
                {status === "" ? "in Progress" : status}
              </Text>
              <span> Status</span>
            </Flex>

            <Flex
              alignItems={"center"}
              borderRight={{ base: "0px", md: "1px" }}
              borderBottom={{ base: "1px", md: "0px" }}
              width={{ base: "100%", md: "auto" }}
              height={{ md: "100%", base: "auto" }}
              direction={{ base: "column", md: "column" }}
              p={"10px"}
              borderColor={{
                base: "rgba(135, 140, 189, 0.3)",
                md: "rgba(135, 140, 189, 0.3)",
              }}
            >
              <Text
                fontWeight="800"
                color={textColorSecondary}
                fontSize="3xl"
                me="4px"
              >
                {total}
              </Text>
              <span> Total</span>
            </Flex>
            <Flex
              alignItems={"center"}
              width={{ base: "100%", md: "auto" }}
              height={{ md: "100%", base: "auto" }}
              borderRight={{ base: "0px", md: "1px" }}
              borderBottom={{ base: "1px", md: "0px" }}
              direction={{ base: "column", md: "column" }}
              p={"10px"}
              borderColor={{
                base: "rgba(135, 140, 189, 0.3)",
                md: "rgba(135, 140, 189, 0.3)",
              }}
            >
              <Text
                fontWeight="800"
                color={textColorSecondary}
                fontSize="3xl"
                me="4px"
              >
                {soled}
              </Text>
              <span> Soled</span>
            </Flex>
            <Flex
              alignItems={"center"}
              direction={{ base: "column", md: "column" }}
              p={"10px"}
            >
              <Text
                fontWeight="800"
                color={textColorSecondary}
                fontSize="3xl"
                me="4px"
              >
                {avalable}
              </Text>
              <span> Avalable</span>
            </Flex>
          </Flex>
        </Flex>{" "}
        {expanded && (
          <Flex direction={{ md: "row", base: "column" }}>
            <Flex
              pr={"25px"}
              direction={"column"}
              gap={"15px"}
              borderRight={{ md: "1px", base: "0px" }}
              borderBottom={{ md: "0px", base: "1px" }}
              borderColor={{
                md: "rgba(135, 140, 189, 0.3)",
                base: "rgba(135, 140, 189, 0.3)",
              }}
            >
              <Button
                bg={secoundboxBg}
                fontSize="2xl"
                fontWeight="500"
                color={textColorSecondary}
                maxWidth={"250px"}
                borderRadius="25px"
              >
                Edit
              </Button>
              <Button
                bg={secoundboxBg}
                fontSize="2xl"
                fontWeight="500"
                color={textColorSecondary}
                maxWidth={"250px"}
                borderRadius="25px"
              >
                Delete
              </Button>
              <Button
                bg={secoundboxBg}
                fontSize="2xl"
                fontWeight="500"
                color={textColorSecondary}
                maxWidth={"250px"}
                borderRadius="25px"
              >
                Put On sale
              </Button>
            </Flex>
            <Flex direction={"column"} p={"15px"}>
              <Flex direction={"row"} gap={"5px"}>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.500"
                >
                  Ticket ID:
                </Text>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.700"
                >
                  #116428
                </Text>
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.500"
                >
                  Description
                </Text>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.700"
                >
                  {description}
                </Text>
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.500"
                >
                  Ticket Includes:
                </Text>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.700"
                >
                  {ticketIncludes}
                </Text>
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.500"
                >
                  Booking Fee
                </Text>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.700"
                >
                  {bookingFee}
                </Text>
              </Flex>{" "}
              <Flex direction={"row"} gap={"5px"}>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.500"
                >
                  Price To Customer:
                </Text>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.700"
                >
                  {priceToCustome}
                </Text>
              </Flex>
              <Flex direction={"row"} gap={"5px"}>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.500"
                >
                  Created
                </Text>
                <Text
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.700"
                >
                  {created}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}
export { TicketCard };
