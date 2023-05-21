import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
           <UserMenu/>
          </div>


          <div className="col-md-9">

          <h2 style={{"textAlign":"center"}}>User Profile Card</h2>

                    <div className="card w-75 p-3">
                      <img src="#" alt="John" width={100} />
                      <h1>{auth?.user?.name}</h1>
                      <h3>{auth?.user?.email}</h3>
                      <h3>{auth?.user?.address}</h3>

                      
                      
                    </div>




        
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;