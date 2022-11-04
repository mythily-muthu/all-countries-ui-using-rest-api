import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country_card">
      <img
        src={country.flags.png}
        alt="country_Flag"
        className="country_flag_image"
      />
      <div className="countries_details_container">
        <div className="country_name">
          <p className="name">{country.name}</p>
        </div>
        <p className="country_population">{country.population}</p>
      </div>
    </div>
  );
};

export default CountryCard;
