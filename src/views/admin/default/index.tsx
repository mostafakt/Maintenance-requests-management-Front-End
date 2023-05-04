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
import OrdersRequests from "./components/OrdersRequests";
import OrdersStatus from "./components/OrdersStatus";
import { devices, devicesType } from "./services/devicesServices";
import DevidesList from "./components/DevidesList";
import { getHeader } from "services/authManager";
import {
  recentOrdersList,
  recentOrders,
} from "./services/recentOrdersServices";
export default function UserReports() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const [devicesList, setDevicesList] = useState<devicesType>();
  const [recentOrdersData, setRecentOrdersData] = useState<recentOrdersList>();

  const [rows, setRows] = useState<
    {
      id: number;
      description: string;
      timeofoccurrance: string;
      Frequencyofoccurane: number;
      RequriedVisit: string;
      location: string;
    }[]
  >([
    {
      description: "r.description",
      Frequencyofoccurane: 0,
      timeofoccurrance: "",
      location: "r.location,",
      id: 1,
      RequriedVisit: "",
    },
  ]);
  const devices = async (SetData: (val: devicesType) => void) => {
    await axios
      .get(process.env.REACT_APP_BACK_END_API_LINK + "devices/", {
        headers: getHeader(),
      })
      .then((val) => {
        SetData(val.data);
      });
  };
  useEffect(() => {
    devices(setDevicesList);
    recentOrders(setRecentOrdersData);
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
            recentOrdersData?.results.map((r) => ({
              title: r.title,
              state: r.state,
              description: r.description,
              client: r.client.name,
              device: r.device.name,
              order_number: r.order_number,
              order_contact: r.order_contact,
              technical: r.technical.map((t) => t.name),
            })) || []
          }
        />{" "}
        <OrdersRequests
          tableData={rows?.map((r) => ({
            description: r.description,
            timeOfOccurrance: r.timeofoccurrance,
            frequencyofoccurane: String(r.Frequencyofoccurane),
            location: r.location,
            id: r.id,
          }))}
        />
        <OrdersStatus
          tableData={rows?.map((r) => ({
            description: r.description,
            timeOfOccurrance: r.timeofoccurrance,
            frequencyofoccurane: String(r.Frequencyofoccurane),
            location: r.location,
            id: r.id,
          }))}
        />
        <DevidesList tableData={devicesList?.results?.map((r) => r) || []} />
      </Flex>
    </Box>
  );
}
