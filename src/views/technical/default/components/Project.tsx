// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { Link, NavLink } from "react-router-dom";
// Assets

export default function Project(props: {
  eventsNumber: string;
  live: boolean;
  [x: string]: any;
}) {
  const { eventsNumber, live, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Link to="/admin/events">
      <Card bg={bg} {...rest} p="14px">
        <Flex
          align="center"
          gap={"10px"}
          direction={{ base: "column", md: "row" }}
        >
          <Text
            color={live ? "green" : "gray"}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {eventsNumber}
          </Text>
          <Box mt={{ base: "10px", md: "0" }}>
            <Text
              color={textColorPrimary}
              fontWeight="500"
              fontSize="md"
              mb="4px"
            >
              {live ? <>events are live</> : <>events in progress</>}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}
