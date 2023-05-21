import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <br></br>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://content3.jdmagicbox.com/comp/erode/c8/9999px424.x424.160908152949.b9c8/catalogue/the-signature-cakes-and-stones-erode-ho-erode-pastry-shops-z5nuvy2qth.jpg"
            alt="contactus"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Get In Touch!</h1>

          <p className="text-justify mt-2">
            Orders welcome for all occassions !!
          </p>

          <p className="mt-3">
            <BiMailSend /> : <a href="mailto:thesignature@gmail.com">thesignature@gmail.com</a>
          </p>

          <p className="mt-3">
            <BiPhoneCall /> : 78713 88843
          </p>
          <p>
            <IoLocationSharp />:No 330 Kohinoor Hotel, Brough Road, Erode HO, Erode - 638001 (Near Max Showroom)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;