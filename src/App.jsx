import React from "react";
import CountryCard from "./components/CountryCard";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CreateEmployee from "./components/CreateEmployee";
const App = () => {
  let [countries, setCountries] = useState([]);
  // const [loading, setLoading] = useState(true);

  let getAllCountriesDetails = async () => {
    let url = "https://restcountries.com/v2/all";
    let res = await axios.get(url);

    setCountries(res.data);
  };

  useEffect(() => {
    getAllCountriesDetails();
  }, []);

  return (
    <div className="countries_container">
      {/* {countries.length === 0 ? (
        <p className="">Loading...</p>
      ) : (
        <div className="country_card_container">
          {countries.map((country) => {
            return <CountryCard key={country.name} country={country} />;
          })}
        </div>
      )} */}
      <CreateEmployee />
    </div>
  );
};

export default App;
