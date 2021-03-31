import React, { useEffect, useState } from "react";
import "../../css/main-page.css";
import MainHeader from "../globalParts/Header";
import MidSection from "./parts/MidSection";
import OrganizationRender from "./parts/Organizations";
import Axios from "axios";
import Footer from "../globalParts/Footer";
import Loader from "react-loader-spinner";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

function MainPage() {
  const [dataToReturn, setDataToReturn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get("/api/?app=organizations/OrganizationApi&resource=mainPage", {
      params: {
        resource: "mainPage"
      },
      timeout: 10000,
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res)
      setDataToReturn(res.data.data);
      setUser(res.data.user);
    });
  }, []);

  const RenderContent = dataToReturn ? (
    <OrganizationRender organizations={dataToReturn} user={user} />
  ) : (
    <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
  );
  return (
    <div className="main__page__container">
      <MainHeader user={user ? user : null} />
      <MidSection dataToReturn={dataToReturn} />
      {/* <div className="organization-render-container--wrapper">
        {RenderContent}
      </div> */}
      <MobileNavigation />
      {/* <Footer /> */}
    </div>
  );
}

export default MainPage;
