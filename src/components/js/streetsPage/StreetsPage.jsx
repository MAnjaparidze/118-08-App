import React, { useState, useEffect } from "react";

import Header from "../globalParts/Header";
import MidSection from "../streetsPage/parts/MidSection";
import Footer from "../globalParts/Footer";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function StreetsPage() {
  const [user, setUser] = useState(null);
  const [countries, setCountries] = useState(null);
  const [cities, setCities] = useState(null);
  const [districts, setDistricts] = useState(null);
  const [streets, setStreets] = useState(null);

  const [countryId, setCountryId] = useState("50185");
  const [cityId, setCityId] = useState(null);
  const [districtId, setDistrictId] = useState("0");
  // const [streetId, setStreetId] = useState(null);

  const [country, setCountry] = useState("საქართველო");
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState("ყველა");

  const [countryPhone, setCountryPhone] = useState("995");
  const [countryTimeZone, setCountryTimeZone] = useState("UTC + 3");
  // const [street, setStreet] = useState("");

  const [isStrLoaded, setStrLoaded] = useState(false);

  window.scrollTo(0, 0);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    console.log(districts);
  }, [districts]);

  useEffect(() => {
    fetchCitiesData(countryId);
  }, [countryId]);

  useEffect(() => {
    if (cityId) {
      fetchDistrictData(cityId);
    }
  }, [cityId]);

  useEffect(() => {
    if(cityId){
      fetchStreetData(districtId);
    }
  }, [districtId]);

  // useEffect(() => {}, [streets]);

  const fetchCountriesData = async () => {
    let fetchItem = await fetch(
      `/api/?app=streets/StreetsApi&resource=mainPage`
    );
    fetchItem.json().then(result => {
      setUser(result.user);
      setCountries(result.countries);
      // console.log(result.countries);
      // let main_url = result.mainUrl;
      // let countrStrStart = main_url.indexOf("country_id=");
      // let countrStrEnd = main_url.indexOf("&town_id=");

      // let countryId = main_url.slice(countrStrStart + 11, countrStrEnd);
      // setCountryId(countryId);
    });
  };
  const fetchCitiesData = async id => {
    let fetchItem = await fetch(
      `/api/?app=streets/StreetsApi&resource=getTowns&country_id=${id}`
    );
    fetchItem.json().then(result => {
      setCities(result.towns);
      setCityId(result.towns[0].town_id);
      setCity(result.towns[0].town_name_ka);
    });
  };
  const fetchDistrictData = async id => {
    let fetchItem = await fetch(
      `/api/?app=streets/StreetsApi&resource=getTownDistrict&country_id=${countryId}&town_id=${id}`
    );
    fetchItem.json().then(result => {
      if (result.townDistrict[0]) {
        if (result.townDistrict[11]) {
          setDistrictId(result.townDistrict[11].town_district_id);
          setDistrict(result.townDistrict[11].name);
          setDistricts(result.townDistrict);
        } else {
          setDistrictId(result.townDistrict[0].town_district_id);
          setDistrict(result.townDistrict[0].name);
          setDistricts(result.townDistrict);
        }
      } else {
        setDistrictId(null);
        setDistrict(null);
        setDistricts(null);
      }
    });
  };
  const fetchStreetData = async id => {
    setStrLoaded(false);
    let fetchItem = null;
    if (district === "ყველა") {
      fetchItem = await fetch(
        // `/api/?app=streets/StreetsApi&resource=getStreets&country_id=50185&town_id=51063&town_district_id=${id}`
        `/api/?app=streets/StreetsApi&resource=getTownDistrict&country_id=${countryId}&town_id=${cityId}`
      );
    } else {
      fetchItem = await fetch(
        // `/api/?app=streets/StreetsApi&resource=getStreets&country_id=50185&town_id=51063&town_district_id=${id}`
        `/api/?app=streets/StreetsApi&resource=getTownDistrict&country_id=${countryId}&town_id=${cityId}&town_district_id=${id}`
      );
    }

    fetchItem.json().then(result => {
      setStreets(result.streets);
      setStrLoaded(true);
      console.log(result.streets.length)
    });
  };

  return (
    <div className="streets-container">
      <Header user={user ? user : null} />

      <MidSection
        countries={countries ? countries : null}
        cities={cities ? cities : null}
        districts={districts ? districts : null}
        streets={streets ? streets : null}
        country={country ? country : null}
        countryPhone={countryPhone ? countryPhone : null}
        city={city ? city : null}
        district={district ? district : null}
        // street={street ? street : null}
        setCountry={setCountry}
        setCountryPhone={setCountryPhone}
        setCity={setCity}
        setDistrict={setDistrict}
        setCountryId={setCountryId}
        setCityId={setCityId}
        setDistrictId={setDistrictId}
        isStrLoaded={isStrLoaded}
      />
      <MobileNavigation />
    </div>
  );
}
