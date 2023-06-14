import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdHome, MdLock } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import { AddEvent } from "views/admin/addevent";
import Orders from "views/admin/orders";
import { EventPages } from "views/admin/eventPages";
import Customers from "views/admin/customers";
import Customer from "views/admin/customers/customer/Customer";
import Technicals from "views/admin/Technicals/Technicals";
import Technical from "views/admin/Technicals/Technical/Technical";
import { ShowOrder } from "views/admin/OrderDetails";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },

  {
    name: "Customers",
    layout: "/admin",
    path: "/customers",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Customers />,
  },
  {
    name: "Technicals",
    layout: "/admin",
    path: "/technicals",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Technicals />,
  },
  {
    sideBar: true,
    name: "Technicals",
    layout: "/admin",
    path: "/technicals/:id",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Technical />,
  },
  {
    sideBar: true,
    name: "Customer",
    layout: "/admin",
    path: "/Customer/:id",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <Customer />,
  },
  {
    sideBar: true,
    name: "Customer",
    layout: "/admin",
    path: "/default/order/:id",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <ShowOrder />,
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
