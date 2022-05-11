import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from "react-router-dom";
import { AuthProvider } from "./core/AuthProvider";
import { AuthRoute } from "./components/AuthRoute";

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
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>...</>}>
                <Reminder />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="/reminder"
            element={
              <AuthRoute>
                <React.Suspense fallback={<>...</>}>
                  <Reminder />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/agenda"
            element={
              <AuthRoute>
                <React.Suspense fallback={<>...</>}>
                  <Agenda />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/karyawan"
            element={
              <AuthRoute>
                <React.Suspense fallback={<>...</>}>
                  <Karyawan />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route
            path="/pengguna"
            element={
              <AuthRoute>
                <React.Suspense fallback={<>...</>}>
                  <Pengguna />
                </React.Suspense>
              </AuthRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/reminder">Reminder</Link>
        </li>
        <li>
          <Link to="/agenda">Agenda</Link>
        </li>
        <li>
          <Link to="/karyawan">Karyawan</Link>
        </li>
        <li>
          <Link to="/pengguna">Pengguna</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
