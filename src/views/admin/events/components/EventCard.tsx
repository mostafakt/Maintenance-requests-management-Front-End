// Chakra imports
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
// Assets
import { Link } from "react-router-dom";
function EventCard(props: {
  eventTitle: string;
  hostName: string;
  total: string;
  soled: string;
  avalable: string;
  status: string;
  image: string;
  [x: string]: any;
}) {
  const {
    eventTitle,
    hostName,
    total,
    soled,
    avalable,
    status,
    image,
    ...rest
  } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("secondaryGray.100", "navy.700");
  const sideBg = useColorModeValue("white", "navy.650");

  return (
    <Card bg={bg} {...rest} p="14px">
      <Link to={"/admin/eventDes/overView"}>
        <Flex
          justifyContent={"space-between"}
          align="center"
          direction={{ base: "column", md: "row" }}
        >
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Image h="80px" w="80px" src={image} borderRadius="8px" me="20px" />
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
                Hosted Py
              </Text>
              <Text
                display={"inline"}
                fontWeight="500"
                color={textColorSecondary}
                fontSize="sm"
                me="4px"
              >
                {hostName}
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
        </Flex>
      </Link>
    </Card>
  );
}
export { EventCard };
