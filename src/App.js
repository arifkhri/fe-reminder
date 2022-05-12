import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthProvider } from "./core/AuthProvider";
import { AuthRoute } from "./components/AuthRoute";
import Tampil from './components/Layout';

const Agenda = React.lazy(() => import("./pages/Agenda"));
const Karyawan = React.lazy(() => import("./pages/Karyawan"));
const Pengguna = React.lazy(() => import("./pages/Pengguna"));
const Reminder = React.lazy(() => import("./pages/Reminder"));
const Login = React.lazy(() => import("./pages/Login"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Reminder />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/reminder"
            element={
              <AuthRoute>
                <Reminder />
              </AuthRoute>
            }
          />
          <Route
            path="agenda"
            element={
              <AuthRoute>
                <React.Suspense fallback={<>...</>}>
                  <Agenda />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="karyawan"
            element={
              <React.Suspense fallback={<>...</>}>
                <Karyawan />
              </React.Suspense>
            }
          />
          <Route
            path="pengguna"
            element={
              <React.Suspense fallback={<>...</>}>
                <Pengguna />
              </React.Suspense>
            }
          />
          {/* <Route
            path="login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <Tampil />
    </div>
  );
}