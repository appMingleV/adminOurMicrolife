import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DownloadIcon from "@mui/icons-material/Download";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Sales",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: "rgba(37,99,235,0.2)",
        borderColor: "rgba(37,99,235,1)",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="container mx-auto px-5 py-5">
      <header className="flex justify-between px-5">
        <Typography variant="h4">Dashboard</Typography>
        <div className="flex gap-5 items-center">
          <button aria-label="Notifications">
            <NotificationsIcon />
          </button>
          <button className="flex items-center gap-2">
            <DownloadIcon />
            <span>Download</span>
          </button>
        </div>
      </header>
      <hr className="w-full mt-5" />

      {/* Filter Section */}
      <section className="filter-section mt-10">
        <div className="filter flex flex-wrap justify-between gap-5">
          {["Lifetime", "People"].map((filter) => (
            <div
              key={filter}
              className="filter-card w-[300px] bg-gray-200 h-[50px] rounded-xl flex justify-start items-center p-2"
            >
              <div className="flex w-full justify-between items-center gap-5">
                <h2>{filter}:</h2>
                <select
                  name={filter.toLowerCase()}
                  className="border-none bg-gray-200 text-sm"
                >
                  {filter === "Lifetime"
                    ? ["Yearly", "Monthly", "Weekly", "Daily"].map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))
                    : ["All", "Yesterday", "This Month", "Lifetime"].map(
                        (option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        )
                      )}
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Filter Section end */}

      {/* Chart & Card Section */}
      <section className="mt-20 flex justify-between gap-5">
        {/* Chart */}
        <div className="w-[200px] lg:w-[50%]">
          <Line data={chartData} />
        </div>
        {/* Chart end */}

        {/* Cards */}
        <div className="w-full lg:w-[50%] grid grid-cols-3 gap-5">
          <div className="w-[160px] h-[140px] bg-gray-200 rounded-xl p-3">
            <div className="flex flex-col">
              <div className="flex justify-center items-center w-[35px] h-[35px] text-white bg-blue-500 rounded-full">
                <AddShoppingCartIcon />
              </div>
              <div className="flex justify-start m-2 text-[18px] font-semibold">
                <h3>50</h3>
              </div>
              <div className="text-[12px]">
                <h3>New Orders</h3>
                <h3 className="text-blue-500">
                  Worth <span className="font-semibold">₹</span>50,000
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[160px] h-[140px] bg-gray-200 rounded-xl p-3">
            <div className="flex flex-col">
              <div className="flex justify-center items-center w-[35px] h-[35px] text-white bg-blue-500 rounded-full">
                <AddShoppingCartIcon />
              </div>
              <div className="flex justify-start m-2 text-[18px] font-semibold">
                <h3>50</h3>
              </div>
              <div className="text-[12px]">
                <h3>New Orders</h3>
                <h3 className="text-blue-500">
                  Worth <span className="font-semibold">₹</span>50,000
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[160px] h-[140px] bg-gray-200 rounded-xl p-3">
            <div className="flex flex-col">
              <div className="flex justify-center items-center w-[35px] h-[35px] text-white bg-blue-500 rounded-full">
                <AddShoppingCartIcon />
              </div>
              <div className="flex justify-start m-2 text-[18px] font-semibold">
                <h3>50</h3>
              </div>
              <div className="text-[12px]">
                <h3>New Orders</h3>
                <h3 className="text-blue-500">
                  Worth <span className="font-semibold">₹</span>50,000
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly w-[160px] h-[140px] bg-gray-200 rounded-xl p-3">
            <div>
              <h5> Total Vendors</h5>
            </div>
            <div className="text-[20px]">
              <h4 className="font-semibold">
                90<span className="text-gray-400">/180</span>
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-evenly w-[160px] h-[140px] bg-gray-200 rounded-xl p-3">
            <div>
              <h5>Total Orders </h5>
            </div>
            <div className="text-[20px]">
              <h4 className="font-semibold">
                90<span className="text-gray-400">/180</span>
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-evenly w-[160px] h-[140px] bg-gray-200 rounded-xl p-3">
            <div>
              <h5> Total Users</h5>
            </div>
            <div className="text-[20px]">
              <h4>
                <span className="font-semibold">110</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
