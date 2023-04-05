import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import TechnicalsTable from "./components/TechnicalsTable";

const Technicals = () => {
  const textColorSecondary = useColorModeValue("black", "white");
  const boxBg = useColorModeValue("white", "whiteAlpha.200");
  const greenBotton = useColorModeValue("green.300", "green.400");
  const secoundboxBg = useColorModeValue("secondaryGray.200", "whiteAlpha.100");
  return (
    <Flex
      mt={"75px"}
      direction={"column"}
      p={"25px"}
      bg={boxBg}
      borderRadius={"20px"}
      gap={"25px"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        {/* <Button
      bg={greenBotton}
      fontSize="2xl"
      fontWeight="500"
      color={textColorSecondary}
      maxWidth={"250px"}
      borderRadius="25px"
    >
      Create Order
    </Button> */}

        <Button
          bg={secoundboxBg}
          fontSize="2xl"
          fontWeight="500"
          color={textColorSecondary}
          maxWidth={"250px"}
          borderRadius="25px"
        >
          Export
        </Button>
      </Flex>
      <TechnicalsTable
        tableData={[
          {
            orderRef: "mostafa",
            ticketHolder: "exsample@exsample.com",
            purchased: "12th Mar 2023 9:32pm",
            status: "passed",
          },
          {
            orderRef: "mostafa",
            ticketHolder: "exsample@exsample.com",
            purchased: "12th Mar 2023 9:32pm",
            status: "passed",
          },
          {
            orderRef: "mostafa",
            ticketHolder: "exsample@exsample.com",
            purchased: "12th Mar 2023 9:32pm",
            status: "passed",
          },
          {
            orderRef: "mostafa",
            ticketHolder: "exsample@exsample.com",
            purchased: "12th Mar 2023 9:32pm",
            status: "passed",
          },
        ]}
      />
    </Flex>
  );
};

export default Technicals;
