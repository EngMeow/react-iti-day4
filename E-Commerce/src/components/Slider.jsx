import React from "react";

const sliderStyle = {
  height: "70vh",
};

const imageStyle = {
  objectFit: "cover",
  width: "100%",
  height: "70vh",
};

function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      style={sliderStyle}
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/imgs/1.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={imageStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/imgs/1.jpg"
            className="d-block w-100"
            alt="Slide 2"
            style={imageStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/imgs/1.jpg"
            className="d-block w-100"
            alt="Slide 3"
            style={imageStyle}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Slider;
