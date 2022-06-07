import { useEffect, useState } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import { useDispatch } from "react-redux";
import { countryFunc} from "../app/countrySlice";
import { UseCountries } from "../hooks/UseCountries";
import { BottonSection } from "./BottonSection";
import CovidTable from "./CovidTable";
import { SelectBox } from "./SelectBox";
import { ChartData } from "./ChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const CovidDashbord = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const countriesList = UseCountries();
  
  useEffect(() => {
    dispatch(countryFunc(countriesList));
  }, [countriesList]);


  const changeCountry = (event) => {
    setCountry(event.target.value);
  };

   

  return (
    <>
      <BottonSection />
      <SelectBox country={country} changeCountry={changeCountry} />
      <ChartData />
     <CovidTable />
    </>
  );
};
