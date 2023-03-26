// chakra imports
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";

// FUNCTIONS

function SidebarContent(props: { routes: RoutesType[]; image?: string }) {
  const { routes, image } = props;
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      pt="25px"
      borderRadius="30px"
      align={"center"}
    >
      {image ? (
        <Image
          src={image}
          // w={{ base: "100%", "3xl": "100%" }}
          // h={{ base: "100%", "3xl": "100%" }}
          mr={"10px"}
          w={"108px"}
          h={"149px"}
          borderRadius="20px"
          border={"1px"}
          borderColor={"rgba(135, 140, 189, 0.3)"}
        />
      ) : (
        <Brand />
      )}
      <Stack direction="column" mt="8px" mb="auto">
        <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
