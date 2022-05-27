import React, { useState } from "react";
import { ScheduleTwoTone, FileTextTwoTone } from "@ant-design/icons";
import "./style.css";

const Notifications = () => {
  const [loading, setLoading] = useState(false);
  const notifications = [
    {
      id: 1,
      title: "17 pengingat hari ini",
      desc: "Jangan lupa untuk menyelesaikan agenda anda",
      time: "5 Juli 2021",
      icon: <img src="/images/reminder-notif.svg" />,
    },
    {
      id: 2,
      title: "Import agenda selesai",
      desc: "Report hasil import agenda dikirim ke email pengguna",
      time: "4 Juli 2021",
      icon: <img src="/images/import-agenda-notif.svg" />,
    },
    {
      id: 3,
      title: "Import karyawan selesai",
      desc: "Report hasil karyawan dikirim ke email pengguna",
      time: "4 Juli 2021",
      icon: <img src="/images/import-employee-notif.svg" />,
    },
  ];

  return (
    <div className="notification container-scroll">
      <div>
        {/* <Spinner spinning={loading}> */}
        <div className="notif-header p-4">
          <h2>Notifikasi</h2>
        </div>
        <div className="notif-body content px-4 pt-1">
          {notifications.map((notif, i) => (
            <div className="notif-item" key={notif.id}>
              <div className="d-flex  justify-content-between">
                <div className="mr-4">
                  {notif.icon}
                </div>
                <div className="notif-msg">
                  <div className="d-flex justify-content-between">
                    <h3>{notif.title}</h3>
                    <span>{notif.time}</span>
                  </div>
                  <p>{notif.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </Spinner> */}
      </div>
      <div className="notif-footer footer">
        {/* <div className="see-all">
          <a>see all</a>
        </div> */}
      </div>
    </div>
  );
};

export default Notifications;
