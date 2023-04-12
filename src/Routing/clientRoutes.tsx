import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { AddDevice } from "views/customer/addDevice";

// Admin Imports
import MainDashboard from "views/customer/default";
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
  {
    // sideBar: true,
    name: "ordees",
    layout: "/client",
    path: "/orders",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <>dasda</>,
  },
  {
    // sideBar: true,
    name: "add device",
    layout: "/client",
    path: "/devices",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <AddDevice />,
  },
  {
    // sideBar: true,
    name: "user profile",
    layout: "/client",
    path: "/profile",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
];

export default routes;
