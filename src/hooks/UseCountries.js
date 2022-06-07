import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../utils/constants";

const CACHE_KEY = "cachedCountries";
export function UseCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
      setCountries(JSON.parse(cache));
    } else {
      axios.get(ENDPOINTS.countryList).then(({ data }) => {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data.countries));
        setCountries(data.countries);
      });
    }
  }, []);

  return countries;
}
