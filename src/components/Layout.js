import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Outlet, Route, Link, Routes } from "react-router-dom";


function Tampil () {
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
        <Header />
        <Sidebar />
      </div>
    );
  }

  export default Tampil;