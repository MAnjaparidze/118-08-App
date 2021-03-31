import React, { useEffect, useState } from "react";
import Header from "../globalParts/Header";
import EventsMidSection from "./parts/EventsMidSection";
import EventRenderSection from "./parts/EventRenderSection";
import Footer from "../globalParts/Footer";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function EventsPage({ ...props }) {
  const [topMovies, setTopMovies] = useState(null);
  const [topTheaters, setTopTheaters] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchMovieItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=1`
    );
    const fetchTheaterItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=16`
    );

    console.log(fetchTheaterItem, fetchMovieItem)
    const movieItem = await fetchMovieItem.json();
    const theaterItem = await fetchTheaterItem.json();

    const user = movieItem.user;

    setUser(user);
    console.log(user);
    const topMovies = movieItem.tkt_shows;
    const top3Moviews = topMovies.slice(0, 3);
    const topTheaters = theaterItem.tkt_shows;
    const top3Theaters = topTheaters.slice(0, 3);

    setTopMovies(top3Moviews);
    setTopTheaters(top3Theaters);
  };
  return (
    <div className="events-page_container">
      <Header user={user ? user : null} props={props} />
      <EventsMidSection />
      <EventRenderSection topMovies={topMovies} topTheaters={topTheaters} />
      <MobileNavigation />
      {/* <Footer /> */}
    </div>
  );
}
