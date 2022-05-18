import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider } from "./core/AuthProvider";
import { AuthRoute } from "./components/AuthRoute";
import Layout from './components/Layout';
import Loading from './components/Loading';
import './style.css';

const Agenda = React.lazy(() => import("./routes/Agenda"));
const Karyawan = React.lazy(() => import("./routes/Employee"));
const User = React.lazy(() => import("./routes/User"));
const Reminder = React.lazy(() => import("./routes/Reminder"));
const Login = React.lazy(() => import("./routes/Login"));
const NoMatch = React.lazy(() => import("./routes/NoMatch"));

export default function App() {
  return (
    <AuthProvider>
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
                  <Karyawan />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/user"
            element={
              // <AuthRoute>
              <React.Suspense fallback={<Loading />}>
                <User />
              </React.Suspense>
              // </AuthRoute>
            }
          />
          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
