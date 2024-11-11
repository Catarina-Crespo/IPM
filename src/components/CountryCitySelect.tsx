import { useState, useEffect } from "react";
import Select from "react-select";

const CountryCitySelect: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any | null>(null);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<any | null>(null);
  const [citiesDisabled, setCitiesDisabled] = useState(true);

  // Function to fetch countries and cities from an API
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);

        const countryOptions = data.data.map(
          (country: {
            iso2: string;
            country: string;
            cities: Array<string>;
          }) => ({
            value: country.iso2,
            label: country.country,
            cities: country.cities,
          })
        );
        setCountries(countryOptions);
      });
  }, []);

  // Function to update the "cities" available in the dropdown and enable it
  function afterCountrySelected(country: any) {
    setSelectedCountry(country);
    setCities(country.cities);
    setCitiesDisabled(false);
    setSelectedCity(null);
  }

  return (
    <div>
      {/* ----------------- Country select ----------------- */}
      <div className="select_container">
        {selectedCountry && (
          <label className="select_label">Destination Country</label>
        )}
        <Select
          options={countries}
          value={selectedCountry}
          placeholder="Select a country"
          onChange={(e) => afterCountrySelected(e)}
          className="custom_select"
        />
      </div>

      {/* ----------------- City select ----------------- */}
      <div className="select_container">
        {selectedCity && (
          <label className="select_label">Destination City</label>
        )}
        <Select
          options={cities.map((city) => ({ label: city, value: city }))}
          value={selectedCity}
          isDisabled={citiesDisabled}
          placeholder="Select a city"
          onChange={(e) => setSelectedCity(e)}
        />
      </div>
    </div>
  );
};

export default CountryCitySelect;
