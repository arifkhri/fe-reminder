import React, { useState } from "react";
import { Badge } from "antd";
import {ScheduleTwoTone, FileTextTwoTone} from "@ant-design/icons";
import "./style.css";

const Notifications = () => {
  const [loading, setLoading] = useState(false);
  const notifications = [
    {
      id: 1,
      title: "17 pengingat hari ini",
      desc: "Jangan lupa untuk menyelesaikan agenda anda",
      time: "5 Juli 2021",
      icon: <FileTextTwoTone />,
    },
    {
      id: 2,
      title: "Import agenda selesai",
      desc: "Report hasil import agenda dikirim ke email pengguna",
      time: "4 Juli 2021",
      icon: <FileTextTwoTone />,
    },
    {
      id: 3,
      title: "Import karyawan selesai",
      desc: "Report hasil karyawan dikirim ke email pengguna",
      time: "4 Juli 2021",
      icon: <ScheduleTwoTone />,
    },
  ];

  return (
    <div className="notification container-scroll">
      <div>
        {/* <Spinner spinning={loading}> */}
          <div className="notif-header p-4">
            <h2>Notifikasi</h2>
            {/* <div>
              <span className="mr-4">Tandai Semua</span>
              <span>
                <Icon className="icon" name="ArrowsClockwise" />
              </span>
            </div> */}
          </div>
          <div className="notif-body content pl-4 pt-1">
            {notifications.map((notif, i) => (
              <div className="notif-item" key={notif.id}>
                <div className="d-flex">
                  <div className="mr-2">
                    {/* <Badge dot  > */}
                      {notif.icon}
                      {/* <Icon
                        className="icon"
                        name="EnvelopeSimple"
                        size="45px"
                      /> */}
                    {/* </Badge> */}
                  </div>
                  <div className="notif-msg">
                    <div className="d-flex">
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
      {/* <div className="notif-footer footer">
        <div className="see-all">
          <a>see all</a>
        </div>
      </div> */}
    </div>
  );
};

export default Notifications;
