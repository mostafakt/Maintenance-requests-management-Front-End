import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Link,
} from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { AddEvent } from "views/admin/addevent";
import Store from "views/Store";
import { AuthContextProvider } from "contexts/AuthContext";
import PrivateRoute from "Routing/PrivateRoutes";
import { MissingRoute } from "Routing/MissingRoute";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path={`/*`} element={<AuthLayout />} />
            <Route element={<PrivateRoute />}>
              <Route path={`/admin/*`} element={<AdminLayout />} />
              <Route path={`/addEvent`} element={<AddEvent />} />
              <Route path={`/store`} element={<Store />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </AuthContextProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
