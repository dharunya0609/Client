import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/About.css";
import Layout from "./../components/Layout/Layout";

import ff from "../images/fast-food.png"

import fd from "../images/delivery-man.png"
import fb from "../images/building.png"


import { useNavigate } from "react-router-dom";


const About = () => {
  const navig = useNavigate();
  return (
    <Layout title={"About us - Ecommer app"}>


      <br></br>
      <br></br>
      <br></br>


      <div className="card bg-dark text-white">
        <img
          src="https://t3.ftcdn.net/jpg/05/88/06/88/240_F_588068825_AQyAkGaeBZtSDd3MrR2fJ5WajNRjbZjw.jpg"
          className="card-img"

          alt="grill"
          height={500}
        ></img>
        <div className="card-img-overlay">
          <h1 className="text-center card-title p-5 mx-auto" style={{}}>
            WHAT WE OFFER
          </h1>

          <p className="text-left card-text h5 p-5" style={{ textAlign: 'left', alignItems: 'left' }}>
            At Signature Cakes and Stones, we believe that
            customer satisfaction is our top priority and need.
            That's why we strive to provide our customers
            with an excellent customer service and
            a hassle-free shopping experience.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* image + text */}

      <div class="container">

        <div class="text">
          <h1>WE UNDERTAKE ORDERS FROM ?</h1>
          <br></br>

          <p>
            Our signature cakes are baked fresh daily using only the finest ingredients. From classic flavors like chocolate and vanilla to more adventurous options like red velvet and tiramisu, will satisfy your sweet tooth. </p>
          <br></br>
          <p>
            Whether you're celebrating a special occasion or just looking for a sweet treat, our cakes are the perfect choice.</p>
        </div>
      </div>

      <br></br>




      {/* Testimonal */}
      <div className="container mt-5 mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src={ff}
                  className="img-fluid"
                  width="80"
                ></img>
              </div>

              <div className="user-content">
                <h5 className="mb-0">Fast Food</h5>
                {/* <span>Software Developer</span> */}
                <p>
                  Delicious quick food for any craving!
                  <button className="button-30" role="button" onClick={() => navig('/menu')} style={{ marginTop: '10px' }}>Book Now</button>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src={fb}
                  className="img-fluid"
                  width="80"
                ></img>
              </div>

              <div className="user-content">
                {/* <h5 className="mb-0">Veera Duncan</h5> */}
                <span>Party Hall</span>
                <p>
                  The perfect space for celebrations !
                  <button className="button-30" role="button" onClick={() => navig('/form')} style={{ marginTop: '10px' }}>Book Now</button>
                </p>


              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src={fd}
                  className="image-fluid"
                  width="80"
                ></img>
              </div>

              <div className="user-content">
                {/* <h5 className="mb-0">Mark Smith</h5> */}
                <span>Fast Delivery</span>
                <p>
                  Experience the best & fast delivery!
                  <button className="button-30" role="button" onClick={() => navig('/menu')} style={{ marginTop: '10px' }}>Book Now</button>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <br></br>


      <br></br>
    </Layout>
  );
};

export default About;