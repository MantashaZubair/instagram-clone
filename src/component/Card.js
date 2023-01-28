import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <div className="card  shadow-sm">
        <div className="card-body px-2">
          <div className="row">
            <div className="col-6 d-flex">
              <img
                className="profile-pic"
                src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profile-img"
              />
              <div className="ps-2 d-flex flex-column justify-content-center">
                <p className="fs-6 fw-bold">Title</p>
                <p className="location">Desription</p>
              </div>
            </div>
            <div className="col-6">
              <i className="float-end fs-4 mt-2 p-2 fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img
                style={{ borderRadius: "15px" }}
                className="p-2 img-fluid"
                src="https://plus.unsplash.com/premium_photo-1661943666393-4a05b646819c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="post-pic"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex ps-4 pt-2">
              <i className="ps-2 fa-regular fa-heart"></i>
              <i className="ps-2 fa-regular fa-comment"></i>
              <i className="ps-2 fw-bold fa-solid fa-location-arrow"></i>
            </div>
            <div className="col-6">
              <span className="fw-bold pe-2 float-end">200 Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
