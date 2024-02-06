import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CardDetails from "./CardDetails";
import "../Styles/Item.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import share from "../Assets/share.png";
import heart from "../Assets/heart.png";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import {
  toggleContent,
  toggleReadMore,
  toggleCardContent,
} from "./toggleUtils";

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state);
  const [details, setDetails] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const eventId = parseInt(id, 10); // Convert id to a number
    const selected = data.find((event) => event?.id === eventId);

    if (selected) {
      setSelectedEvent(selected);
    } else {
      // Handle the case where the event is not found
      navigate("/");
    }

    setDetails(true);
  }, [id, data, navigate]);

  return (
    <div>
      <Navbar />
      <div className="event-component">
        <div className="heading">
          <button className="back" onClick={() => navigate("/")}>
            <WestOutlinedIcon />
          </button>
          <h1>Event Number {id}</h1>
        </div>
        <div className="selected-event">
          <div className="event-img-box">
            <img
              src={`https://picsum.photos/200?random=${selectedEvent?.id}`}
              alt=""
            />
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

        <>
          <h1 className="more-events">More Events</h1>
          <div className="card-container">
            {data.map((event) => {
              if (parseInt(id, 10) === event?.id) return null;
              return (
                <CardDetails
                  key={event.id}
                  post={event}
                  handleRedirectToItem={(postId) => navigate(`/item/${postId}`)}
                  toggleContent={() => toggleContent(event.id, setDetails)}
                  toggleReadMore={() =>
                    toggleReadMore(event.id, setSelectedEvent)
                  }
                  toggleCardContent={() =>
                    toggleCardContent(event.id, setFilteredData)
                  }
                />
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
}

export default Item;
