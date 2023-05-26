import Card from "components/card/Card";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets ;
import TotalSpent from "views/admin/default/components/TotalSpent";
import Project from "./components/Project";
import ColumnsTable from "./components/ColumnsTable";
import { tableData, eventTableData } from "./variables/tableData";
import EventsSellingTable from "./components/EventsSellingTable";
import { useState, useEffect } from "react";
import axios from "axios";
import OrdersStatus from "./components/OrdersStatus";
import { devices, devicesType } from "./services/devicesServices";
import DevidesList from "./components/DevidesList";
import { getHeader, getUser } from "services/authManager";
import {
  getTechnicalInfo,
  TechnicalProfile,
} from "./services/recentOrdersServices";
export default function UserReports() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const [profileData, setProfileData] = useState<TechnicalProfile>();

  useEffect(() => {
    getTechnicalInfo(getUser()).then((data) => {
      setProfileData(data);
    });
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex
        align="center"
        gap={"10px"}
        direction={{ base: "column", md: "column" }}
      >
        <ColumnsTable
          tableData={
            profileData?.orders.map((r) => ({
              title: r.title,
              state: r.state,
              description: r.description,
              client: r.client_id, //.name,
              device: r.device_id, //.name,
              order_number: r.order_number,
              addDate: r.add_date,
            })) || []
          }
          count={1}
          next={1}
          priv={1}
        />
      </Flex>
    </Box>
  );
}
