import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Item.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import CardDetails from "./CardDetails";
import { toggleReadMore, toggleCardContent } from "./toggleUtils";

function Bookmark() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state);
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [details, setDetails] = useState(true); // Assuming you have a state for details

  useEffect(() => {
    const randomBookmarkIndex = Math.floor(Math.random() * data.length);
    const selected = data[randomBookmarkIndex];

    if (selected) {
      setSelectedBookmark(selected);
    } else {
      navigate("/");
    }
  }, [data, navigate]);

  const handleBookmarkClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  // Implement toggleContent directly in the component
  const toggleContent = () => {
    setDetails((prevDetails) => !prevDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="event-component">
        <div className="heading">
          <button className="back" onClick={() => navigate("/")}>
            <WestOutlinedIcon />
          </button>
          <h1>Click the arrow below for more details</h1>
        </div>

        <div className="more-bookmarks">
          <h1 className="more-events">More Events</h1>
          <div className="card-container">
            {data.map((bookmark) => (
              <CardDetails
                key={bookmark.id}
                post={bookmark}
                handleRedirectToItem={() => handleBookmarkClick(bookmark.id)}
                toggleReadMore={() => toggleReadMore(bookmark.id, setDetails)}
                toggleCardContent={() =>
                  toggleCardContent(bookmark.id, setDetails)
                }
                toggleContent={toggleContent} // Add toggleContent to the component
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
