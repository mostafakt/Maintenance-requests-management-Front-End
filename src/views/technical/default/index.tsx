/* eslint-disable @typescript-eslint/no-floating-promises */
import { Box, Flex } from "@chakra-ui/react";
// Assets ;
import ColumnsTable from "./components/ColumnsTable";
import { useState, useEffect } from "react";
import { getUser } from "services/authManager";
import {
  getTechnicalInfo,
  TechnicalProfile,
} from "./services/recentOrdersServices";
export default function UserReports() {
  // Chakra Color Mode

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
