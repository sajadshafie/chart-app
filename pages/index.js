import Image from "next/image";
import { Inter } from "next/font/google";
import RadarChart from "@/chart";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const years = ["2017", "2018", "2019", "2020", "2021"];
export default function Home() {
  const [year, setYear] = useState(0);
  const handleYear = (index) => {
    setYear(index);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2 className="text-2xl">Analyse of People Ageing</h2>
      <h4 className="text-xl">Description</h4>
      <p className="mb-4">
        This Project is about the aging of the population and its impact on the
        GDP of countries.
        <br />
      </p>
      <div className="mb-5">
        {years.map((v, i) => {
          return (
            <button
              onClick={() => handleYear(i)}
              key={i}
              class={`mr-1  ${
                year == i && `bg-blue-500 text-slate-50 `
              } hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
            >
              {v}
            </button>
          );
        })}
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="justify-between"
      >
        {year == 0 && (
          <div style={{ width: "500px", height: "500px" }}>
            <p style={{ textAlign: "center" }}>2017</p>
            <RadarChart
            // this is sample for pass data to chart component you most carefull and because  you can pass number beetwen 1 and 100
            // Argentina={[1, 2, 3, 4, 5]}
            // Australia={[1, 2, 3, 4, 5]}
            // Austria={[1, 2, 3, 4, 5]}
            // Bangeladesh={[1, 2, 3, 4, 5]}
            // Belgium={[1, 2, 3, 4, 5]}
            />
          </div>
        )}

        {year == 1 && (
          <div style={{ width: "500px", height: "500px" }}>
            <p style={{ textAlign: "center" }}>2018</p>
            <RadarChart />
          </div>
        )}
        {year == 2 && (
          <div style={{ width: "500px", height: "500px" }}>
            <p style={{ textAlign: "center" }}>2019</p>
            <RadarChart />
          </div>
        )}
        {year == 3 && (
          <div style={{ width: "500px", height: "500px" }}>
            <p style={{ textAlign: "center" }}>2020</p>
            <RadarChart />
          </div>
        )}
        {year == 4 && (
          <div style={{ width: "500px", height: "500px" }}>
            <p style={{ textAlign: "center" }}>2021</p>
            <RadarChart />
          </div>
        )}
      </div>
    </main>
  );
}
