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
  const [ordersPage, setOrdersPage] = useState({
    page: 1,
    perPage: 10,
    count: 100,
  });
  useEffect(() => {
    devices(setDevicesList, 1, 5);
    recentOrders(setRecentOrdersData, ordersPage.page, ordersPage.perPage);
  }, []);
  useEffect(() => {
    recentOrders(setRecentOrdersData, ordersPage.page, ordersPage.perPage);
  }, [ordersPage]);

  useEffect(() => {
    setOrdersPage({ ...ordersPage, count: recentOrdersData?.count });
  }, [recentOrdersData]);

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
          pagination={ordersPage}
          setPagination={setOrdersPage}
        />
        <DevidesList tableData={devicesList?.results?.map((r) => r) || []} />
      </Flex>
    </Box>
  );
}
