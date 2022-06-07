import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../utils/constants";

export function TotalDataCovid() {
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
      axios.get(ENDPOINTS.covidTotalDataDetails).then(({ data }) => {
        const items = [
          {
            name: "TOTAL CASES",
            num: data.confirmed.value + data.recovered.value + data.deaths.value,
          },
          { name: "ACTIVE CASES", num: data.confirmed.value },
          { name: "RECOVERED", num: data.recovered.value },
          { name: "DEATH", num: data.deaths.value },
        ];
        setTotalData(items);
      });
  
  }, []);

  return totalData;
}
