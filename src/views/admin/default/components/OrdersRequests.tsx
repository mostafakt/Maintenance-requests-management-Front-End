import {
  Flex,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import * as React from "react";
// import Modal from "react-modal";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// Custom components
import Card from "components/card/Card";
import { Link } from "react-router-dom";
import {
  getOrder,
  getOrderType,
  orderType,
  updateOrderService,
} from "../services/recentOrdersServices";

type RowObj = {
  id: string;
  title: string;
  state: string;
  description: string;
  client: string;
  device: string;
  order_number: string;
  order_contact: string[];
  technical: string[];
};

const columnHelper = createColumnHelper<RowObj>();
// Modal.setAppElement("#yourAppElement");
// const columns = columnsDataCheck;
function OrdersRequests({ tableData }: { tableData: RowObj[] }) {
  const [data, setData] = React.useState(() => [...tableData]);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  React.useEffect(() => {
    console.log(tableData);
    setData(() => [...tableData]);
  }, [tableData]);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const acceptButton = useColorModeValue("green.500", "whiteAlpha.100");
  const rejectButton = useColorModeValue("red.500", "whiteAlpha.100");
  // let defaultData = tableData;
  // let defaultData = tableData;
  const [orderData, setOrderData] = React.useState<getOrderType>();
  const [orderId, setOrderId] = React.useState("");
  React.useEffect(() => {
    getOrder(orderId, setOrderData);
  }, [orderId]);
  const rejectOrder = () => {
    updateOrderService({
      id: orderData?.id,
      title: orderData?.title,
      description: orderData?.description,
      client: orderData?.client.id,
      device: orderData?.device.id,
      order_number: orderData?.order_number,
      order_contact: orderData?.order_contact[0].id,
      technical: ["33ad7cdb-f8ce-45dd-a70a-5781170da579"],
      problem_images: orderData?.problem_images,
    });
  };
  const columns = [
    columnHelper.accessor("title", {
      id: "title",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Title
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor("description", {
      id: "description",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          description
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor("client", {
      id: "client",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Client
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("device", {
      id: "device",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Device
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("state", {
      id: "state",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          State
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("id", {
      id: "id",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          Actions
        </Text>
      ),
      cell: (info) => (
        <Flex color={textColor} fontSize="sm" fontWeight="700">
          <Flex direction={{ xl: "row", sm: "column" }} gap={"15px"}>
            <Button
              bg={acceptButton}
              _hover={{ bg: "green.300" }}
              _active={{ bg: "whiteAlpha.100" }}
              mb={{ sm: "16px", xl: "24px" }}
              color={"white"}
              fontWeight="regular"
              fontSize="sm"
              minW="185px"
              mx="auto"
              onClick={() => {
                alert("accepted");
              }}
            >
              Accept and assign to technical
            </Button>
            <Button
              bg={rejectButton}
              _hover={{ bg: "red.300" }}
              _active={{ bg: "whiteAlpha.100" }}
              mb={{ sm: "16px", xl: "24px" }}
              color={"white"}
              fontWeight="regular"
              fontSize="sm"
              minW="185px"
              mx="auto"
              onClick={() => {
                setOrderId(info.getValue());
                rejectOrder();
              }}
            >
              reject
            </Button>
            {/* {info.getValue()} */}
          </Flex>
        </Flex>
      ),
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Modal
        isCentered
        onClose={() => {}}
        isOpen={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {}}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%"
        >
          Recent Orders
        </Text>
        <Link to={"/admin/orders"}>
          <Button>View All Orders</Button>
        </Link>
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table
              .getRowModel()
              .rows.slice(0, 11)
              .map((row) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: "14px" }}
                          minW={{ sm: "150px", md: "200px", lg: "auto" }}
                          borderColor="transparent"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}
export { OrdersRequests };
