import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
// Assets ;
import ColumnsTable from "./components/ColumnsTable";
import { useState, useEffect, useContext } from "react";
import { devices, devicesType } from "./services/devicesServices";
import DevidesList from "./components/DevidesList";
import { AuthContext, AuthContextProvider } from "contexts/AuthContext";
import {
  recentOrders,
  recentOrdersList,
} from "views/admin/default/services/recentOrdersServices";
import Toaster from "components/Toaster/Toaster";
export default function UserReports() {
  const [recentOrdersData, setRecentOrdersData] = useState<recentOrdersList>();

  // const { id } = useContext(AuthContext);
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const [devicesList, setDevicesList] = useState<devicesType>();
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
  const tt = recentOrdersData?.results[0]?.technical?.map((t) => t.name);
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
              device: r.device.name,
              order_number: r.order_number,
              order_contact: r.order_contact.map((t) => t.contact_name),
              orderContact: r.order_contact.map((t) => t.contact_name),
              technical: r.technical?.map((t) => t.name),
            })) || []
          }
        />
        <DevidesList tableData={devicesList?.results?.map((r) => r) || []} />
      </Flex>
    </Box>
  );
}
