import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../globalParts/Header";
import MidSection from "./parts/MidSection";
import Footer from "../globalParts/Footer";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function UserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchMovieItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=1`
    );
   
    const movieItem = await fetchMovieItem.json();

    const user = movieItem.user;

    setUser(user);
  };

  return (
    <div className="user-page_container">
      <Header user={user ? user : null} />
      <MidSection user={user ? user : null} />
      <MobileNavigation />
      <Footer />
    </div>
  );
}
