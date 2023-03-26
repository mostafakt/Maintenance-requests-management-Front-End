import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { TicketCard } from "./components/TicketCard";
import Project1 from "assets/img/profile/Project1.png";

const Tickets = () => {
  // const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("black", "white");
  const boxBg = useColorModeValue("green.200", "whiteAlpha.100");
  const secoundboxBg = useColorModeValue("secondaryGray.200", "whiteAlpha.100");
  const bg = useColorModeValue("white", "whiteAlpha.100");
  return (
    <Flex
      padding={"25px"}
      bg={bg}
      align="center"
      gap={"25px"}
      direction={{ base: "column", md: "column" }}
      borderRadius={"25px"}
    >
      <Flex
        w={{ xl: "100%" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Link to={"/admin/eventDes/addevent"}>
          <Button
            bg={boxBg}
            fontSize="2xl"
            fontWeight="500"
            color={textColorSecondary}
            maxWidth={"250px"}
            borderRadius="7px"
          >
            Add a new ticket
          </Button>
        </Link>
        <Flex gap={"10px"} direction={{ base: "row", md: "row" }}>
          <Button
            bg={secoundboxBg}
            fontSize="2xl"
            fontWeight="500"
            color={textColorSecondary}
            maxWidth={"250px"}
            borderRadius="25px"
          >
            Organise
          </Button>
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
          <Button
            bg={secoundboxBg}
            fontSize="2xl"
            fontWeight="500"
            color={textColorSecondary}
            maxWidth={"250px"}
            borderRadius="25px"
          >
            Options
          </Button>
        </Flex>
      </Flex>
      <TicketCard
        status="in progress"
        avalable="15"
        soled="20"
        total="35"
        eventTitle="test"
        image={Project1}
        hostName={"mostafa"}
        bookingFee={"£0.60"}
        priceToCustome={"£0.60"}
        ticketID={"1231241"}
        ticketIncludes={"hi"}
        description={"description"}
        created={"11th Mar 2023 4:32pm"}
      />
    </Flex>
  );
};

export { Tickets };
