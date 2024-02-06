import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Homepage.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { postRequest } from "../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";
import Spinner from "./Spinner"; 

function Homepage() {
  const { loading, data, error } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirectToItem = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(postRequest());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setFilteredData([]);
      return;
    }

    const filtered = data.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data, error]);

  const toggleContent = (id) => {
    setFilteredData((prevData) =>
      prevData.map((post) =>
        post.id === id
          ? { ...post, showFullContent: !post.showFullContent }
          : post
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <h1>Social Media For Travellers</h1>
        <div className="search">
          <SearchOutlinedIcon
            className="serach-icon"
            style={{ cursor: "pointer" }}
          />
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {loading && <Spinner />} {/* Display the Spinner when loading */}
        {error && <h2>Error fetching data. Please try again later.</h2>}
        {!loading && !error && (
        <div className="card-container">
        {filteredData.length > 0 ? (
            filteredData.map((post) => (
              <CardDetails
                key={post.id}
                post={post}
                handleRedirectToItem={handleRedirectToItem}
                toggleContent={toggleContent}
              />
            ))
          ) : (
            <h2>{filteredData.length === 0 ? "No Results Found" : ""}</h2>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
