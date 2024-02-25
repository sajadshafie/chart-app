import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChart({
  Argentina,
  Australia,
  Austria,
  Bangeladesh,
  Belgium,
}) {
  const data = {
    labels: [
      "GDP",
      "Life expectancy",
      "Population",
      "Unemployment",
      "income",
      "A",
    ],
    datasets: [
      {
        label: "Argentina",
        data: Argentina
          ? Argentina
          : Array.from(
              { length: 6 },
              () => Math.floor(Math.random() * 100) + 1
            ),
        backgroundColor: "rgba(36, 88, 162,0.2)",
        borderColor: "rgb(36, 88, 162)",
        borderWidth: 2,
      },
      {
        label: "Australia",
        data: Australia
          ? Australia
          : Array.from(
              { length: 6 },
              () => Math.floor(Math.random() * 100) + 1
            ),
        backgroundColor: "rgba(162, 82, 36,0.2)",
        borderColor: "rgb(162, 82, 36)",
        borderWidth: 2,
      },
      {
        label: "Austria",
        data: Austria
          ? Austria
          : Array.from(
              { length: 6 },
              () => Math.floor(Math.random() * 100) + 1
            ),
        backgroundColor: "rgba(32, 143, 91,0.2)",
        borderColor: "rgb(32, 143, 91)",
        borderWidth: 2,
      },
      {
        label: "Bangeladesh",
        data: Bangeladesh
          ? Bangeladesh
          : Array.from(
              { length: 6 },
              () => Math.floor(Math.random() * 100) + 1
            ),
        backgroundColor: "rgba(162, 36, 136,0.2)",
        borderColor: "rgb(162, 36, 136)",
        borderWidth: 2,
      },
      {
        label: "Belgium",
        data: Belgium
          ? Belgium
          : Array.from(
              { length: 6 },
              () => Math.floor(Math.random() * 100) + 1
            ),
        backgroundColor: "rgba(188, 171, 57,0.2)",
        borderColor: "rgb(188, 171, 57)",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 12,
          },
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
        font: {
          size: "1.5rem",
        },
      },
    },
  };
  console.log(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1)
  );
  return <Radar data={data} options={options} height={200} />;
}
