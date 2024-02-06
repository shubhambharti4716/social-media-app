// CardDetails.jsx
import React from "react";
import arrow from "../Assets/arrow.png";

function CardDetails({ post, handleRedirectToItem, toggleContent }) {
  return (
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
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
