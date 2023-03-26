import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdHome, MdLock } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import { Events } from "views/admin/events";
import Orders from "views/admin/orders";
import { EventPages } from "views/admin/eventPages";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },

  {
    name: "Events",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/events",
    component: <Events />,
  },
  // {
  //   name: "tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  // {
  //   name: "Orders",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   component: Profile,
  // },
  {
    name: "Orders",
    layout: "/admin",
    path: "/orders",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Orders />,
  },

  {
    sideBar: true,
    name: "Event Pages",
    layout: "/admin",
    path: "/eventDes/*",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <EventPages />,
  },
  {
    name: "Sign In",
    layout: "",
    path: "/",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;
