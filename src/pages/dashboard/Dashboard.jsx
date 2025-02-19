import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import UserImage from '../../assets/hacker.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Sales',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(37,99,235,0.2)',
        borderColor: 'rgba(37,99,235,1)',
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
          {['Lifetime', 'People'].map((filter) => (
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
                  {filter === 'Lifetime'
                    ? ['Yearly', 'Monthly', 'Weekly', 'Daily'].map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))
                    : ['All', 'Yesterday', 'This Month', 'Lifetime'].map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                </select>
              </div>
            </div>
          ))}
          <div className="w-[150px] h-[50px] bg-gray-200 rounded-xl flex items-center p-2 gap-3 border-2 border-blue-600">
            <div className="bg-blue-600 text-white h-[35px] w-[35px] rounded-full flex justify-center items-center">
              <StorefrontIcon />
            </div>
            <div className="flex flex-col">
              <h6 className="text-xs">Store Link</h6>
              <a
                href="https://www.suresop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500"
              >
                Suresop.com
              </a>
            </div>
          </div>
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
          <div className='w-[160px] h-[140px] bg-gray-200 rounded-xl p-3'>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center w-[35px] h-[35px] text-white bg-blue-500 rounded-full'>
                <AddShoppingCartIcon />
              </div>
              <div className='flex justify-start m-2 text-[18px] font-semibold'>
                <h3>50</h3>
              </div>
              <div className='text-[12px]'>
                <h3>New Orders</h3>
                <h3 className='text-blue-500'>Worth <span className='font-semibold'>₹</span>50,000</h3>
              </div>
            </div>
          </div>
          <div className='w-[160px] h-[140px] bg-gray-200 rounded-xl p-3'>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center w-[35px] h-[35px] text-white bg-blue-500 rounded-full'>
                <AddShoppingCartIcon />
              </div>
              <div className='flex justify-start m-2 text-[18px] font-semibold'>
                <h3>50</h3>
              </div>
              <div className='text-[12px]'>
                <h3>New Orders</h3>
                <h3 className='text-blue-500'>Worth <span className='font-semibold'>₹</span>50,000</h3>
              </div>
            </div>
          </div>
          <div className='w-[160px] h-[140px] bg-gray-200 rounded-xl p-3'>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center w-[35px] h-[35px] text-white bg-blue-500 rounded-full'>
                <AddShoppingCartIcon />
              </div>
              <div className='flex justify-start m-2 text-[18px] font-semibold'>
                <h3>50</h3>
              </div>
              <div className='text-[12px]'>
                <h3>New Orders</h3>
                <h3 className='text-blue-500'>Worth <span className='font-semibold'>₹</span>50,000</h3>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-evenly w-[160px] h-[140px] bg-gray-200 rounded-xl p-3'>
            <div>
              <h5>Active User</h5>
            </div>
            <div className='text-[20px]'>
              <h4 className='font-semibold'>90<span className='text-gray-400'>/180</span></h4>
            </div>
          </div>
          <div className='flex flex-col justify-evenly w-[160px] h-[140px] bg-gray-200 rounded-xl p-3'>
            <div>
              <h5>Active Vendor</h5>
            </div>
            <div className='text-[20px]'>
              <h4 className='font-semibold'>90<span className='text-gray-400'>/180</span></h4>
            </div>
          </div>
          <div className='flex flex-col justify-evenly w-[160px] h-[140px] bg-gray-200 rounded-xl p-3'>
            <div>
              <h5>Live Order</h5>
            </div>
            <div className='text-[20px]'>
              <h4><span className='font-semibold'>110</span></h4>
            </div>
          </div>
        </div>

        {/* Cards end */}

      </section>
      {/* Chart & Card Section end */}

      {/* Leaderboard section */}

      <section className='grid grid-cols-3 mt-[50px] mx-5 gap-5'>
        <div id='user-leaderboard' className='w-[320px] h-[auto] bg-gray-200 rounded-xl p-5'>
          <div className='text-[30px]'>
            <h4>User Leaderboard</h4>
          </div>
          <div>
            {/* User card */}
            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='vendor-leaderboard' className='w-[320px] h-[auto] bg-gray-200 rounded-xl p-5'>
          <div className='text-[30px]'>
            <h4>Vendor Leaderboard</h4>
          </div>

          {/* User Card */}

          <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

        </div>
        <div id='driver-leaderboard' className='w-[320px] h-[auto] bg-gray-200 rounded-xl p-5'>
          <div className='text-[30px]'>
            <h4>Driver Leaderboard</h4>
          </div>

          {/* User Card */}

          <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>1</h5>
                </div>
                <div className='text-green-400'>
                  <ArrowDropUpIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

            <div id='card' className='flex mt-5 justify-between' >
              <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-red-400 user-image h-[50px] w-[50px] rounded-full'>
                  <div>
                    <img src={UserImage} alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div>
                    <h3>John Doe</h3>
                  </div>
                  <div className='text-[10px]'>
                    <h5>637 Points</h5>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='text-[20px]'>
                  <h5>4</h5>
                </div>
                <div className='text-red-400'>
                  <ArrowDropDownIcon sx={{fontSize:'40px'}} />
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* Leaderboard section end */}

    </div>
  );
};

export default Dashboard;
