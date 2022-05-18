import React, { useState } from "react";
import { Badge } from "antd";
import "./style.css";

const Notifications = () => {
  const [loading, setLoading] = useState(false);
  const notifications = [
    {
      id: 1,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
    {
      id: 2,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
    {
      id: 3,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
    {
      id: 4,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
    {
      id: 5,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
    {
      id: 6,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
    {
      id: 7,
      title: "title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "5 min",
    },
  ];

  return (
    <div className="notification container-scroll">
      <div>
        {/* <Spinner spinning={loading}> */}
          <div className="notif-header p-4">
            <h6>Notification</h6>
            <div>
              <span className="mr-4">Tandai Semua</span>
              <span>
                {/* <Icon className="icon" name="ArrowsClockwise" /> */}
              </span>
            </div>
          </div>
          <div className="notif-body content pl-4 pt-1">
            {notifications.map((notif, i) => (
              <div className="notif-item" key={notif.id}>
                <div className="d-flex">
                  <div className="mr-2">
                    <Badge dot>
                      {/* <Icon
                        className="icon"
                        name="EnvelopeSimple"
                        size="45px"
                      /> */}
                    </Badge>
                  </div>
                  <div className="notif-msg">
                    <div className="d-flex">
                      <h6>{notif.title}</h6>
                      <span>5 min</span>
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
        <div className="see-all">
          <a>see all</a>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
