import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import Card from "components/card/Card";
import React, { useState } from "react";
import CustomersTable from "./components/CustomersTable";

const Customers = () => {
  const [rows, setRows] = useState<
    {
      id: number;
      name: string;
      timeofoccurrance: string;
      Frequencyofoccurane: number;
      RequriedVisit: string;
      location: string;
    }[]
  >([
    {
      name: "mostafa",
      Frequencyofoccurane: 0,
      timeofoccurrance: "",
      location: "r.location,",
      id: 1,
      RequriedVisit: "",
    },
  ]);
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

      <CustomersTable
        tableData={rows?.map((r) => ({
          name: r.name,
          timeOfOccurrance: r.timeofoccurrance,
          frequencyofoccurane: String(r.Frequencyofoccurane),
          location: r.location,
          id: r.id,
        }))}
      />
      {/* <ColumnTable tableData={tableData} /> */}
    </Flex>
  );
};

export default Customers;
