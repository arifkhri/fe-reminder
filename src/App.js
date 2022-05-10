import React from "react";
import { BrowserRouter as Router, Switch, Outlet, Route, Link, Routes } from "react-router-dom";

const Agenda = React.lazy(() => import("./pages/Agenda"));
const Karyawan = React.lazy(() => import("./pages/Karyawan"));
const Pengguna = React.lazy(() => import("./pages/Pengguna"));
const Reminder = React.lazy(() => import("./pages/Reminder"));
const Login = React.lazy(() => import("./pages/Login"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Reminder />} />
        <Route
          path="reminder"
          element={
            <React.Suspense fallback={<>...</>}>
              <Reminder />
            </React.Suspense>
          }
        />
        <Route
          path="agenda"
          element={
            <React.Suspense fallback={<>...</>}>
              <Agenda />
            </React.Suspense>
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
        <Route
          path="login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Reminder</Link>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Outlet />
    </div>
  );
}