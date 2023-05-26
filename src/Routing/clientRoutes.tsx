import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { AddDevice } from "views/customer/addDevice";
import { CreateOrder } from "views/customer/addOrder";
import { CreateOrderContact } from "views/customer/addOrderContct";

// Admin Imports
import MainDashboard from "views/customer/default";
import { AddIssueImage } from "views/customer/issueImage";
import { Profile } from "views/customer/profile";
// Auth Imports
const routes = [
  {
    // sideBar: true,
    name: "Dashboard",
    layout: "/client",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  // {
  //   // sideBar: true,
  //   name: "ordees",
  //   layout: "/client",
  //   path: "/orders",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <>dasda</>,
  // },
  {
    // sideBar: true,
    name: "Create new order",
    layout: "/client",
    path: "/CreateOrder",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <CreateOrder />,
  },
  {
    // sideBar: true,
    name: "Add new  device",
    layout: "/client",
    path: "/devices",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <AddDevice />,
  },
  {
    sideBar: true,
    name: "user profile",
    layout: "/client",
    path: "/profile",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    // sideBar: true,
    name: "Create new Order Contact",
    layout: "/client",
    path: "/orderContat",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <CreateOrderContact />,
  },
  // {
  //   // sideBar: true,
  //   name: "Add image for your issue",
  //   layout: "/client",
  //   path: "/issueimage",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <AddIssueImage />,
  // },
];

export default routes;
