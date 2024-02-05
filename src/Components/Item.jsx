import React, { useEffect, useState } from "react";
import "../Styles/Item.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import share from "../Assets/share.png";
import heart from "../Assets/heart.png";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import Navbar from "./Navbar";

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state);
  const [details, setDetails] = useState(true);

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    data?.forEach((event) => {
      if (event?.id === id) setSelectedEvent(event);
    });
    setDetails(true);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="event-component">
        <div className="heading">
          <button className="back" onClick={() => navigate("/")}>
            <WestOutlinedIcon />
          </button>
          <h1>Event Number #{id}</h1>
        </div>
        <div className="selected-event">
          <div className="event-img-box">
            <img src={`https://picsum.photos/200?random=${id}`} alt="" />
            <div className="overlay">
              <h2 className="title">{selectedEvent?.title}</h2>
              <div className="social">
                <img src={share} alt="" />
                <img src={heart} alt="" />
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="details-info">
              <button
                className={`details-btn ${details ? "btn-active" : ""}`}
                onClick={() => setDetails(true)}
              >
                Details
              </button>
              <button
                className={`info-btn ${details ? "" : "btn-active"}`}
                onClick={() => setDetails(false)}
              >
                Event Info
              </button>
            </div>
            {details ? (
              <p className="selected-details">{selectedEvent?.body}</p>
            ) : (
              <p className="event-info">
                Event Was Posted By {selectedEvent?.userId}
              </p>
            )}
          </div>
        </div>
        <h1>More Events</h1>
        <div className="container">
          {data.map((event) => {
            if (id === event?.id) return null;
            return (
              <div className="card" key={event.id}>
                <div className="img-box">
                  <img
                    src={`https://picsum.photos/200?random=${event.id}`}
                    alt=""
                  />
                </div>
                <div className="item-details">
                  <h4 className="title">{event?.title}</h4>
                  <div className="body-details-box">
                    <div className="body-details">
                      <span className="paragraph">
                        {details
                          ? event?.body
                          : `Event Was Posted By ${event?.userId}`}
                      </span>
                      {event?.body.length > 100 && (
                        <span
                          className="read-more"
                          onClick={() => setDetails(!details)}
                        >
                          {details ? " Read less" : " Read more"}
                        </span>
                      )}
                    </div>
                    {/* <button>
                      <KeyboardArrowLeftOutlinedIcon />
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Item;
