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
import { Bar } from "react-chartjs-2";
import { useDispatch } from "react-redux";
import { getDailyInfo } from "../app/countrySlice";
import { GetDailyData } from "../hooks/GetDailyData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartData = () => {
  const dispatch = useDispatch();
  const [totalData, setTotalData] = useState([]);
  const dailyList = GetDailyData();
  useEffect(() => {
    dispatch(getDailyInfo(dailyList));
  }, [dailyList]);
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistics",
      },
    },
  };

  const labels = dailyList.map((item) =>
    new Date(item.reportDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  );

  const dataChart = {
    labels,
    datasets: [
      {
        label: "total Cases",
        data: dailyList.map((item) => item.totalConfirmed),

        backgroundColor: "rgb(129, 54, 247)",
      },
      {
        label: "Total recovered",
        data: dailyList.map((item) => item.recovered.total),
        backgroundColor: "rgb(250, 192, 0)",
      },

      {
        label: "total Death",
        data: dailyList.map((item) => item.deaths.total),
        backgroundColor: "rgb(249, 90, 10)",
      },
    ],
  };

  


  return (
    <>
      <Bar options={options} data={dataChart} />
    </>
  );
};
