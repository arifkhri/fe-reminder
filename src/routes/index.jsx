import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";

import axios from "../core/helpers/axios";
import cookie from "../core/helpers/cookie";
import useLocalData from "../core/hooks/useLocalData";
import { AuthRoute } from "../components/AuthRoute";
import Layout from '../components/Layout';
import Loading from '../components/Loading';

const Agenda = React.lazy(() => import("./Agenda"));
const Employee = React.lazy(() => import("./Employee"));
const User = React.lazy(() => import("./User"));
const Reminder = React.lazy(() => import("./Reminder"));
const Login = React.lazy(() => import("./Login"));
const NoMatch = React.lazy(() => import("./NoMatch"));

let isRequestingAuth = false;

export default function App() {
  const { dispatch } = useLocalData();
  const location = useLocation();
  const navigate = useNavigate();

  async function checkingLoggedIn() {
    const userData = cookie.get('user');

    try {
      if (userData && !isRequestingAuth) {
        isRequestingAuth = true;
        axios.post('/user-by-token', { token: JSON.parse(userData).access_token }, true).then((response) => {
          isRequestingAuth = false;
          cookie.set("user", JSON.stringify(response.data));
          dispatch({
            type: 'update',
            value: response.data,
            name: 'userData',
          });
          navigate(location.pathname || "/");
        }).catch(() => {
          cookie.del('user');
          dispatch({
            type: 'update',
            value: null,
            name: 'userData',
          });
          navigate("/login");
          isRequestingAuth = false;
        });

      }
    } catch {

    }
  }

  useEffect(() => {
    checkingLoggedIn();
  }, [])

  return (
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
  );
}
