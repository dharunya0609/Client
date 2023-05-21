import React from "react";
import Card from "./Card.js";
import Iframe from 'react-iframe';
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import cake1 from "../images/banner.webp";
import cake2 from "../images/cake2.webp";
import cake3 from "../images/cake3.jpg";
import cake4 from "../images/brow.webp";
import cake5 from "../images/dount.webp";
import '../styles/home.css';
const Home = () => {
  const navig = useNavigate();
  return (
    <Layout title={"Home page"}>
      <Card />
      <div className="row contactus ">
        <div className="col-md-6 ">
          <div className="pic-ctn">
            <img src={cake1} alt="" className="pic" />
            <img src={cake2} alt="" className="pic" />
            <img src={cake3} alt="" className="pic" />
            <img src={cake4} alt="" className="pic" />
            <img src={cake5} alt="" className="pic" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-justify mt-2">
            <div className="content-ctn">
              <p className="content">
                <h1>A FINE ART OF BAKING</h1>
                Signature Cakes is a bakery chain with multiple locations across India. They specialize in customized cakes for all occasions, including birthdays, weddings, and corporate events. Their cakes are made with high-quality ingredients and are known for their unique designs and flavors.
                <br />
                <button className="button-30" role="button" onClick={() => navig('/menu')}>Taste the difference</button>
              </p>
              <p className="content">
                <h1>MAKE A WISH & INDULGE</h1>
                Signature Cakes is a bakery chain with multiple locations across India. They specialize in customized cakes for all occasions, including birthdays, weddings, and corporate events. Their cakes are made with high-quality ingredients and are known for their unique designs and flavors.
                <br />
                <button className="button-30" role="button" onClick={() => navig('/menu')}>Taste the difference</button>
              </p>
              <p className="content">
                <h1>HAPPINESS IN SLICES</h1>
                Signature Cakes is a bakery chain with multiple locations across India. They specialize in customized cakes for all occasions, including birthdays, weddings, and corporate events. Their cakes are made with high-quality ingredients and are known for their unique designs and flavors.
                <br />
                <button className="button-30" role="button" onClick={() => navig('/menu')}>Taste the difference</button>
              </p>
              \            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;