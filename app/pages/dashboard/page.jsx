"use client";
import React from "react";
import Profile from "../../images/profile.png";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Heart from "../../images/heart.png";
import Liver from "../../images/liver.png";
import Kidney from "../../images/kidney.png";
import Stomach from "../../images/stomach.png";
import Lungs from "../../images/lungs.png";
import Brain from "../../images/brain.png";
import Graph from "../../images/graph.png";
import Graph2 from "../../images/graph4.png";
import Teeth from "../../images/teeth.png";
// import Bar from "../../images/bar.png";
import Eye from "../../images/eye.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import Image from "next/image";
import { scales } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Pulse Rate",
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Haemoglobin",
    },
  },
};

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sugar Level",
    },
  },
};

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const labels2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const barLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const barData = {
  labels: barLabels,
  datasets: [
    {
      label: "Dataset 1",
      data: [70, 50, 70, 50, 70, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      borderWidth: 1,
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Dataset 2",
      data: [10, 20, 30, 20, 30, 10],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="bg-teal-50 w-full h-fit">
      <header className="p-5 grid md:grid-cols-3 gap-10">
        <div className="flex items-center gap-5 md:pl-16">
          <div>
            <Image src={Profile} alt="profile" className="w-16 rounded-md" />
          </div>
          <div>
            <h1 className="font-bold text-xl">Sabarish H</h1>
            <p className="text-slate-500">Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Search"
          />
          <FaSearch className="bg-teal-500 w-12 text-white rounded-xl p-2 h-10" />
        </div>
        <div className="flex items-center justify-end pr-20 gap-8">
          <IoMdNotifications className="bg-white w-12 text-teal-500 shadow-lg rounded-xl p-2 h-10" />
          <IoMdSettings className="bg-white w-12 text-teal-500  shadow-lg rounded-xl p-2 h-10" />
        </div>
      </header>
      <section className="p-5 md:pl-20 grid md:grid-cols-6 gap-5 w-[95%]">
        <div className=" bg-white shadow-xl rounded-lg h-fit">
          <div className="flex items-center justify-center gap-10 ">
            {" "}
            <div>
              <h1 className="font-bold text-md pt-3">Heart</h1>
              <p className="py-1 font-bold text-2xl">75%</p>
            </div>
            <div>
              <Image src={Heart} alt="heart" className="w-16" />
            </div>
          </div>
          <p className="text-center  text-sm text-slate-400">
            10% Less Than Last Month
          </p>
        </div>
        <div className=" bg-white shadow-xl rounded-lg h-fit">
          <div className="flex items-center justify-center gap-10 ">
            {" "}
            <div>
              <h1 className="font-bold text-md pt-3">Liver</h1>
              <p className="py-1 font-bold text-2xl">70%</p>
            </div>
            <div>
              <Image src={Liver} alt="heart" className="w-16" />
            </div>
          </div>
          <p className="text-center  text-sm text-slate-400">
            10% Less Than Last Month
          </p>
        </div>
        <div className=" bg-white shadow-xl rounded-lg h-fit">
          <div className="flex items-center justify-center gap-10 ">
            {" "}
            <div>
              <h1 className="font-bold text-md pt-3">Kidney</h1>
              <p className="py-1 font-bold text-2xl">85%</p>
            </div>
            <div>
              <Image src={Kidney} alt="heart" className="w-16" />
            </div>
          </div>
          <p className="text-center  text-sm text-slate-400">
            10% Less Than Last Month
          </p>
        </div>
        <div className=" bg-white shadow-xl rounded-lg h-fit">
          <div className="flex items-center justify-center gap-10 ">
            {" "}
            <div>
              <h1 className="font-bold text-md pt-3">Stomach</h1>
              <p className="py-1 font-bold text-2xl">89%</p>
            </div>
            <div>
              <Image src={Stomach} alt="heart" className="w-16" />
            </div>
          </div>
          <p className="text-center  text-sm text-slate-400">
            10% Less Than Last Month
          </p>
        </div>
        <div className=" bg-white shadow-xl rounded-lg h-fit">
          <div className="flex items-center justify-center gap-10 ">
            {" "}
            <div>
              <h1 className="font-bold text-md pt-3">Lungs</h1>
              <p className="py-1 font-bold text-2xl">95%</p>
            </div>
            <div>
              <Image src={Lungs} alt="heart" className="w-16" />
            </div>
          </div>
          <p className="text-center  text-sm text-slate-400">
            10% Less Than Last Month
          </p>
        </div>
        <div className=" bg-white shadow-xl rounded-lg h-fit">
          <div className="flex items-center justify-center gap-10 ">
            {" "}
            <div>
              <h1 className="font-bold text-md pt-3">Brain</h1>
              <p className="py-1 font-bold text-2xl">75%</p>
            </div>
            <div>
              <Image src={Brain} alt="heart" className="w-16" />
            </div>
          </div>
          <p className="text-center  text-sm text-slate-400">
            10% Less Than Last Month
          </p>
        </div>
      </section>
      <section className="p-5 mt-2 md:pl-20 grid md:grid-cols-2 gap-10 w-[95%]">
        <div>
          {" "}
          <div className="bg-white p-3 shadow-xl">
            <div className="flex justify-between items-center  ">
              <div>
                <h1 className="font-bold">Pulse Rate</h1>
                <p className="text-sm text-slate-400">This Week</p>
              </div>
              <div>
                <h1>72 bpm Average</h1>
              </div>
            </div>
            <div>
              <Line options={options} data={data} />
            </div>
            {/* <div className="flex">
              <div className="py-3 leading-7 text-slate-400">
                <p>90</p>
                <p>80</p>
                <p>70</p>
                <p>60</p>
                <p>50</p>
                <p>40</p>
                <p>30</p>
                <p>20</p>
              </div>
              <div>
                <Image src={Graph} alt="graph" className="w-[90%]" />
              </div>
            </div>
            <div className="flex gap-10 pl-9 text-slate-400">
              <p>Sun</p>
              <p>Mon</p>
              <p>Tue</p>
              <p>wed</p>
              <p>Thu</p>
              <p>Fri</p>
              <p>Sat</p>
            </div> */}
          </div>
          <div className="grid grid-cols-2 py-3 w-[100%] gap-12">
            <div className="bg-white p-3 shadow-xl rounded-lg ">
              <div className="flex justify-between">
                <h1 className="font-bold text-sm">Haemoglobin</h1>
                <p className="font-bold text-sm text-slate-400">This Week</p>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-4xl py-2">17.6</h1>
                <p className="text-sm text-slate-400">g/dl</p>
              </div>
              <div>
                <Line options={options2} data={data2} className="mt-10" />
                {/* <div>
                  <Image src={Graph2} alt="graph " />
                </div> */}
              </div>
            </div>
            <div className="bg-white p-3 shadow-xl rounded-lg ">
              <div className="flex justify-between">
                <h1 className="font-bold text-sm">Sugar levels</h1>
                <p className="font-bold text-sm text-slate-400">This Week</p>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-4xl py-2">99.3</h1>
                <p className="text-sm text-slate-400">mg/dl</p>
              </div>
              <div>
                <Bar options={barOptions} data={barData} className="mt-10" />
                {/* <div>
                  <Image src={Bar} alt="graph " />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-8 bg-white shadow-xl rounded-lg">
            <div className="flex justify-between">
              <FaChevronLeft className="text-teal-500" />
              <p className="text-teal-500 font-bold">February 2021</p>
              <FaChevronRight className="text-teal-500" />
            </div>
            <div className="flex gap-16 py-4 mt-4 pl-3 text-teal-500 font-bold">
              <p className="font-bold">S</p>
              <p className="font-bold">M</p>
              <p className="font-bold">T</p>
              <p className="font-bold">W</p>
              <p className="font-bold">T</p>
              <p className="font-bold">F</p>
              <p className="font-bold">S</p>
            </div>
            <div className="flex gap-16 py-4 text-sm ">
              <p className="pl-2 text-slate-400">27</p>
              <p className=" text-slate-400">28</p>
              <p className=" text-slate-400">29</p>
              <p className=" text-slate-400">30</p>
              <p>31</p>
              <p>1</p>
              <p>2</p>
            </div>
            <div className="flex gap-[70px] py-4 text-sm ">
              <p className="pl-2  ">3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
            </div>
            <div className="flex gap-[65px] py-4 text-sm ">
              <p className="pl-2 ">10</p>
              <p>11</p>
              <p>12</p>
              <p>13</p>
              <p>14</p>
              <p>15</p>
              <p>16</p>
            </div>
            <div className="flex gap-16 py-4 text-sm ">
              <p className="pl-2 ">17</p>
              <p>18</p>
              <p>19</p>
              <p>20</p>
              <p>21</p>
              <p>22</p>
              <p>23</p>
            </div>
            <div className="flex gap-[62px] py-4 text-sm ">
              <p className="pl-2 ">24</p>
              <p>25</p>
              <p>26</p>
              <p>27</p>
              <p>28</p>
              <p>29</p>
              <p>30</p>
            </div>
          </div>
          <div className="p-3 my-5 rounded-xl bg-teal-500 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div>
                <Image src={Teeth} alt="teeth" className="w-20 rounded-lg" />
              </div>
              <div className="text-white">
                <h1 className="font-bold text-xl">Dentist</h1>
                <p className="text-sm">Dr. Sheck Akther Ahmmad</p>
              </div>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-xl">10 Am</h1>
              <p className="text-sm">City Hospital</p>
            </div>
          </div>
          <div className="p-3 my-2 rounded-xl bg-teal-300 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div>
                <Image src={Eye} alt="teeth" className="w-20 rounded-lg" />
              </div>
              <div className="text-white">
                <h1 className="font-bold text-xl">Oculis</h1>
                <p className="text-sm">Dr. Muztafuzur Rahman</p>
              </div>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-xl">11 Am</h1>
              <p className="text-sm">City Hospital</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
