import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Project1 from "assets/img/profile/Project1.png";
import Card from "components/card/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ButtonsRow from "./components/ButtonsRow";
import { EventCard } from "./components/EventCard";
function Events() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("black", "white");
  const boxBg = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [eventState, setEventState] = useState(1);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      ></SimpleGrid> */}
      <Card mb={{ base: "0px", "2xl": "20px" }}>
        <Flex
          direction={{ base: "row", md: "row" }}
          justifyContent={"space-between"}
        >
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            fontSize="2xl"
            mt="10px"
            mb="4px"
          >
            Upcoming Events
          </Text>
          <ButtonsRow setState={setEventState} />
        </Flex>
        <Link to={"/admin/eventDes/addeventt"}>
          <Button
            bg={boxBg}
            fontSize="2xl"
            fontWeight="500"
            color={textColorSecondary}
            maxWidth={"250px"}
            borderRadius="7px"
          >
            Add a new event
          </Button>
        </Link>
        <Flex
          align="center"
          gap={"10px"}
          direction={{ base: "column", md: "column" }}
          m={"15px"}
        >
          <EventCard
            status="in progress"
            avalable="15"
            soled="20"
            total="35"
            eventTitle="test"
            image={Project1}
            hostName={"mostafa"}
          />{" "}
          <EventCard
            status="in progress"
            avalable="15"
            soled="20"
            total="35"
            eventTitle="test"
            image={Project1}
            hostName={"mostafa"}
          />
          <EventCard
            status="in progress"
            avalable="15"
            soled="20"
            total="35"
            eventTitle="test"
            image={Project1}
            hostName={"mostafa"}
          />
        </Flex>
      </Card>
    </Box>
  );
}
export { Events };
