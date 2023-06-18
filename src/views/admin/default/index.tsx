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
import { getHeader } from "services/authManager";
import {
  recentOrdersList,
  recentOrders,
} from "./services/recentOrdersServices";
import { OrdersRequests } from "./components/OrdersRequests";
export default function UserReports() {
  const [ordersPage, setOrdersPage] = useState({
    page: 1,
    perPage: 10,
    count: undefined,
  });
  const [ordersRequestsPage, setOrdersRequestsPage] = useState({
    page: 1,
    perPage: 10,
    count: undefined,
  });

  const [devicesList, setDevicesList] = useState<devicesType>();
  const [recentOrdersData, setRecentOrdersData] = useState<recentOrdersList>();
  const [requestedOrdersData, setRequestedOrdersData] =
    useState<recentOrdersList>();

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
    recentOrders(setRecentOrdersData, ordersPage.page, ordersPage.perPage);
    recentOrders(
      setRequestedOrdersData,
      ordersRequestsPage.page,
      ordersRequestsPage.perPage,
      "INITIALIZED"
    );
  }, []);
  useEffect(() => {
    recentOrders(setRecentOrdersData, ordersPage.page, ordersPage.perPage);
  }, [ordersPage]);
  useEffect(() => {
    recentOrders(
      setRequestedOrdersData,
      ordersRequestsPage.page,
      ordersRequestsPage.perPage,
      "INITIALIZED"
    );
  }, [ordersRequestsPage]);
  useEffect(() => {
    if (!ordersPage.count)
      setOrdersPage({ ...ordersPage, count: recentOrdersData?.count });
  }, [recentOrdersData]);
  useEffect(() => {
    if (!ordersRequestsPage.count)
      setOrdersRequestsPage({
        ...ordersRequestsPage,
        count: requestedOrdersData?.count,
      });
  }, [requestedOrdersData]);

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
              id: r.id,
              title: r.title,
              state: r.state,
              description: r.description,
              client: r.client.name,
              device: r.device.name,
              order_number: r.order_number,
              order_contact: r.order_contact.map((t) => t.contact_name),
              technical: r?.technical?.map((t) => t.name),
            })) || []
          }
          pagination={ordersPage}
          setPagination={setOrdersPage}
        />{" "}
        <OrdersRequests
          onUpdate={() => {
            devices(setDevicesList);
            recentOrders(
              setRecentOrdersData,
              ordersPage.page,
              ordersPage.perPage
            );
            recentOrders(
              setRequestedOrdersData,
              ordersRequestsPage.page,
              ordersRequestsPage.perPage,
              "INITIALIZED"
            );
          }}
          tableData={
            requestedOrdersData?.results.map((r) => ({
              title: r.title,
              state: r.state,
              description: r.description,
              client: r.client.name,
              device: r.device.name,
              order_number: r.order_number,
              order_contact: r.order_contact.map((t) => t.contact_name),

              technical: r?.technical?.map((t) => t.name),
              id: r.id,
            })) || []
          }
          pagination={ordersRequestsPage}
          setPagination={setOrdersRequestsPage}
        />
        {/* <OrdersStatus
          tableData={rows?.map((r) => ({
            description: r.description,
            timeOfOccurrance: r.timeofoccurrance,
            frequencyofoccurane: String(r.Frequencyofoccurane),
            location: r.location,
            id: r.id,
          }))}
        /> */}
        <DevidesList tableData={devicesList?.results?.map((r) => r) || []} />
      </Flex>
    </Box>
  );
}
