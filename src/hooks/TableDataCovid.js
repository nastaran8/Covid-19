import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../utils/constants";

export function TableDataCovid() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
      axios.get(ENDPOINTS.covidTableData).then(({ data }) => {
        setCovidData(data);
      });
  
  }, []);

  return covidData;
}
