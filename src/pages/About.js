import React from "react";
import Layout from "./../components/Layout/Layout";
import ReactPlayer from 'react-player'
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <ReactPlayer width="500px" height="280px" controls url='https://youtu.be/6LD30ChPsSs' 
        onReady = {() => console.log('onReady callback')}
        onstart = {() => console.log('onStart callback')}
        onPause = {() => console.log('onPause callback')}
        onEnded = {() => console.log('onEnded callback')}
        onError = {() => console.log('onError callback')}
        >

        </ReactPlayer>
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
      
    </Layout>
  );
};

export default About;