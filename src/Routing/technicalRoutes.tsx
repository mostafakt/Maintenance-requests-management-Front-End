import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdHome, MdLock } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import { Events } from "views/admin/events";
import Orders from "views/admin/orders";
import { EventPages } from "views/admin/eventPages";
import Customers from "views/admin/customers";
import Customer from "views/admin/customers/customer/Customer";
import Technicals from "views/admin/Technicals/Technicals";
import Technical from "views/admin/Technicals/Technical/Technical";
import { Profile } from "views/technical/profile";

const routes = [
  {
    // sideBar: true,
    name: "Dashboard",
    layout: "/technical",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <></>,
  },
  {
    sideBar: true,
    name: "user profile",
    layout: "/technical",
    path: "/profile",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  // {
  //   // sideBar: true,
  //   name: "ordees",
  //   layout: "/technical",
  //   path: "/orders",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <>kkk</>,
  // },
];

export default routes;
