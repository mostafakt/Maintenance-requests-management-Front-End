// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo, MastercardIcon } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Flex direction={"row"} gap={"10px"}>
        <MastercardIcon h="26px" my="32px" color={logoColor} />
        <Text
          mt={"23px"}
          color="secondaryGray.600"
          fontSize="2xl"
          fontWeight="900"
          me="12px"
        >
          Event Club
        </Text>
      </Flex>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
