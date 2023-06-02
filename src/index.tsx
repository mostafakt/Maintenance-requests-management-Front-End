import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import TechnicalLayout from "./layouts/technical";
import CustomerLayout from "./layouts/customer";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { AddEvent } from "views/admin/addevent";
// import Store from "views/Store";
import { AuthContextProvider } from "contexts/AuthContext";
import PrivateRoute from "Routing/PrivateRoutes";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path={`/*`} element={<AuthLayout />} />
            <Route element={<PrivateRoute rule={"ADMIN"} />}>
              <Route path={`/admin/*`} element={<AdminLayout />} />
            </Route>

            <Route element={<PrivateRoute rule={"TECHNICAL"} />}>
              <Route path={`/TECHNICAL/*`} element={<TechnicalLayout />} />
            </Route>
            <Route element={<PrivateRoute rule={"CLIENT"} />}>
              <Route path={`/client/*`} element={<CustomerLayout />} />
            </Route>
            <Route path={`/addEvent`} element={<AddEvent />} />
            {/* <Route path={`/store`} element={<Store />} /> */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </React.StrictMode>
    </AuthContextProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
