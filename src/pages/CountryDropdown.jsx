import { useState } from "react";

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

  const countries = [
    "Bangladesh",
    "United States",
    "Canada",
    "United Kingdom",
    "India",
    "Australia",
  ];

  return (
    <div className="mt-3  ">
      <select
        className="border-1 p-3 rounded-md max-w-[500px] bg-white cursor-pointer"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
