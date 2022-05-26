import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import axios from "../core/helpers/axios";
// import cookie from "../core/helpers/cookie";
// import useLocalData from "../core/hooks/useLocalData";
import { AuthRoute } from "../components/AuthRoute";
import Layout from '../components/Layout';
import Loading from '../components/Loading';

const Agenda = React.lazy(() => import("./Agenda"));
const Employee = React.lazy(() => import("./Employee"));
const User = React.lazy(() => import("./User"));
const Reminder = React.lazy(() => import("./Reminder"));
const Login = React.lazy(() => import("./Login"));
const ResetPassword = React.lazy(() => import("./ResetPassword"));
const NoMatch = React.lazy(() => import("./NoMatch"));


export default function App() {
  // const { dispatch } = useLocalData();
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/reminder" />} />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<Loading />}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="/reset-password"
            element={
              <React.Suspense fallback={<Loading />}>
                <ResetPassword />
              </React.Suspense>
            }
          />
          <Route
            path="/reminder"
            element={
              <AuthRoute>
                <React.Suspense fallback={<Loading />}>
                  <Reminder />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/agenda"
            element={
              <AuthRoute>
                <React.Suspense fallback={<Loading />}>
                  <Agenda />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <AuthRoute>
                <React.Suspense fallback={<Loading />}>
                  <Employee />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/user"
            element={
              <AuthRoute>
                <React.Suspense fallback={<Loading />}>
                  <User />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
