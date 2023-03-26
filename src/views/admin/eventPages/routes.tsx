import { AddEvent } from "views/admin/addevent";
import { OverviewEvent } from "./overviewEvent";
import { AddIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Tickets } from "./tickets";

const routes = [
  {
    name: "Overview",
    layout: "/admin",
    path: "/overView",
    subPath: "/eventDes",
    icon: <ViewIcon width="17px" height="17px" color="inherit" />,
    component: <OverviewEvent />,
  },
  {
    name: "event details",
    layout: "/admin",
    path: "/addevent",
    subPath: "/eventDes",
    icon: <AddIcon width="17px" height="17px" color="inherit" />,
    component: <AddEvent />,
  },
  {
    name: "Tickets",
    layout: "/admin",
    path: "/Tickets",
    subPath: "/eventDes",
    icon: <EditIcon width="17px" height="17px" color="inherit" />,
    component: <Tickets />,
  },
];

export default routes;
