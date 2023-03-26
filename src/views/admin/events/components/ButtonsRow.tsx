import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
interface IButtonsRow {
  setState: (val: number) => void;
}
const ButtonsRow = ({ setState }: IButtonsRow) => {
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bg = useColorModeValue("gray.200", "rgba(137, 144, 196, 0.116)");

  return (
    <Flex
      bg={bg}
      direction={{ base: "column", sm: "column", md: "row" }}
      cursor={"pointer"}
      // border={"1px"}
      borderColor={"rgba(135, 140, 189, 0.3)"}
      borderRadius={"15px"}
      height={"auto"}
      alignItems={"center"}
    >
      <Box
        onClick={() => setState(1)}
        p={"5px"}
        display={"flex"}
        alignItems="center"
        borderRight={{ base: "0px", md: "1px" }}
        width={{ base: "100%", md: "auto" }}
        height={{ md: "100%", base: "auto" }}
        borderBottom={{ base: "1px", md: "0px" }}
        borderColor={{
          base: "rgba(135, 140, 189, 0.3)",
          md: "rgba(135, 140, 189, 0.3)",
        }}
      >
        <Text color={textColorPrimary} fontWeight="normal" fontSize="sm">
          Upcoming
        </Text>
      </Box>
      <Box
        onClick={() => setState(2)}
        p={"5px"}
        display={"flex"}
        alignItems="center"
        borderRight={{ base: "0px", md: "1px" }}
        width={{ base: "100%", md: "auto" }}
        height={{ md: "100%", base: "auto" }}
        borderBottom={{ base: "1px", md: "0px" }}
        borderColor={{
          base: "rgba(135, 140, 189, 0.3)",
          md: "rgba(135, 140, 189, 0.3)",
        }}
      >
        <Text color={textColorPrimary} fontWeight="normal" fontSize="sm">
          Past
        </Text>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        overflow={"hidden"}
        onClick={() => setState(3)}
        p={"5px"}
      >
        <Text color={textColorPrimary} fontWeight="normal" fontSize="sm">
          Events Awaiting Settlement
        </Text>
      </Box>
    </Flex>
  );
};

export default ButtonsRow;
