// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Image } from "chakra-ui";

// Custom components
import { HorizonLogo, MastercardIcon } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import logo from './logo.png';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Flex direction={"row"} gap={"10px"}>
        {/* <MastercardIcon h="26px" my="32px" color={logoColor} /> */}
        <img
          width={"40px"}
          height={"40px"}
          src={logo}
          alt=""
        />
        <Text
          color="secondaryGray.600"
          fontSize="2xl"
          fontWeight="900"
          me="12px"
        >
          Hamsie Services
        </Text>
      </Flex>
      <HSeparator mb="20px" mt={"20px"} />
    </Flex>
  );
}

export default SidebarBrand;
