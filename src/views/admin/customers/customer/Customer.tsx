import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParamsId } from "../../../../hooks/useParamsId";
import CustomerDivaces from "./components/CustomerDivaces";
import OrdersRequests from "./components/OrdersRequests";

const Customer = () => {
  const id = useParamsId();

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
  return (
    <Flex
      mt={"75px"}
      direction={"column"}
      p={"25px"}
      borderRadius={"20px"}
      gap={"25px"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      ></Flex>
      {id}
      {/* <ColumnTable tableData={tableData} /> */}
      <OrdersRequests
        tableData={rows?.map((r) => ({
          description: r.description,
          timeOfOccurrance: r.timeofoccurrance,
          frequencyofoccurane: String(r.Frequencyofoccurane),
          location: r.location,
          id: r.id,
        }))}
      />
      <CustomerDivaces
        tableData={rows?.map((r) => ({
          description: r.description,
          timeOfOccurrance: r.timeofoccurrance,
          frequencyofoccurane: String(r.Frequencyofoccurane),
          location: r.location,
          id: r.id,
        }))}
      />
    </Flex>
  );
};

export default Customer;
