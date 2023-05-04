import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import TechnicalsTable from "./components/TechnicalsTable";
import { useEffect, useState } from "react";
import {
  technicalList,
  technicalsListType,
} from "./services/technicalServices";
const Technicals = () => {
  const [tecnicalListData, setTecnicalListData] =
    useState<technicalsListType>();
  const textColorSecondary = useColorModeValue("black", "white");
  const boxBg = useColorModeValue("white", "whiteAlpha.200");
  const greenBotton = useColorModeValue("green.300", "green.400");
  const secoundboxBg = useColorModeValue("secondaryGray.200", "whiteAlpha.100");
  useEffect(() => {
    technicalList(setTecnicalListData);
  }, []);

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
      <TechnicalsTable tableData={tecnicalListData?.results || []} />
    </Flex>
  );
};

export default Technicals;
