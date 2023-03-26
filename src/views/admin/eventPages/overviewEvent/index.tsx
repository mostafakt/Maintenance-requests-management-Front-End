import React from "react";
import Card from "components/card/Card";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import TotalSpent from "views/admin/default/components/TotalSpent";
import TicketRevenue from "./components/TicketRevenue";
import EventsSellingTable from "./components/EventsSellingTable";
import { eventTableData } from "./variables/tableData";

const OverviewEvent = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("black", "white");
  const secoundboxBg = useColorModeValue("secondaryGray.200", "whiteAlpha.100");
  const bg = useColorModeValue("orange.200", "red.500");
  return (
    <Flex w={"100%"} direction={"column"} gap={"15px"}>
      <Card
        alignItems="center"
        flexDirection="column"
        w="100%"
        p="20px 15px"
        h="max-content"
      >
        <Flex
          w={"100%"}
          direction={{ base: "column", md: "column" }}
          gap={"15px"}
        >
          <Flex
            w={"100%"}
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Text
              color={textColor}
              fontSize="34px"
              textAlign="start"
              fontWeight="700"
              lineHeight="100%"
            >
              OverView
            </Text>
            <Flex direction={{ base: "column", md: "row" }} gap={"15px"}>
              <Button
                bg={secoundboxBg}
                fontSize="xl"
                fontWeight="500"
                color={textColorSecondary}
                maxWidth={"250px"}
                borderRadius="25px"
              >
                Options
              </Button>{" "}
              <Button
                bg={bg}
                fontSize="xl"
                fontWeight="500"
                color={textColorSecondary}
                maxWidth={"250px"}
                borderRadius="25px"
              >
                View On Store
              </Button>
            </Flex>
          </Flex>

          <Flex direction={{ base: "column", md: "column" }}>
            <TotalSpent />
          </Flex>
        </Flex>
      </Card>
      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        <Card
          alignItems="flex-start"
          flexDirection="column"
          w={{ base: "auto", md: "49%" }}
          p="20px 15px"
        >
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            Ticket Revenue
          </Text>
          <TicketRevenue />
        </Card>
        <Card
          w={{ base: "auto", md: "49%" }}
          alignItems="flex-start"
          flexDirection="column"
          p="20px 15px"
          h="max-content"
        >
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            Event Activity
          </Text>
          <EventsSellingTable tableData={eventTableData} />
        </Card>
      </Flex>
    </Flex>
  );
};

export { OverviewEvent };
