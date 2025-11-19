import React from "react";

export default function NewsItem({
  title,
  description,
  imgUrl,
  newsUrl,
  author,
  date,
}) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="news" />
        <div className="card-body">
          <h5 className="card-title">
            {title}...{" "}
            <span
              class="position-absolute top-0   start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: 1 }}
            >
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
