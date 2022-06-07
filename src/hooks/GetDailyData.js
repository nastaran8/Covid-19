import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../utils/constants";

export function GetDailyData() {
  const [dailyCovidData, setDailyData] = useState([]);

  useEffect(() => {
      axios.get(ENDPOINTS.dailyData).then(({ data }) => {
        setDailyData(data.length > 20 ? data.slice(data.length - 20) : data);
      });
  
  }, []);

  return dailyCovidData;
}
