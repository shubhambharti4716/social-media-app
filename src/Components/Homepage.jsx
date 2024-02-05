import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Homepage.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import arrow from "../Assets/arrow.png";
import { postRequest } from "../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const { loading, data, error } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirectToItem = (itemId) => {
    navigate(`/item/:${itemId}`);
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
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error fetching data. Please try again later.</h2>}
        <div className="card-container">
          {filteredData.length > 0 ? (
            filteredData.map((post) => (
              <div key={post.id} className="card">
                <div className="img-box">
                  <div className="cover"></div>
                  <img
                    src={`https://picsum.photos/200?random=${post.id}`}
                    alt={`Post ${post.id}`}
                  ></img>
                </div>
                <div className="item-details">
                  <h4 className="title">{post.title}</h4>
                  <div className="item-body">
                    <div className="body-details">
                      <span className="paragraph">
                        {post.showFullContent
                          ? post.body
                          : `${post.body.slice(0, 100)}...`}
                      </span>

                      {post.body.length > 100 && (
                        <span
                          className="read-more"
                          onClick={() => toggleContent(post.id)}
                        >
                          {post.showFullContent ? " Read less" : " Read more"}
                        </span>
                      )}
                    </div>

                    <button onClick={() => handleRedirectToItem(post.id)}>
                      <img
                        src={arrow}
                        alt=""
                        onClick={() => handleRedirectToItem(post.id)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>No Results Found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
