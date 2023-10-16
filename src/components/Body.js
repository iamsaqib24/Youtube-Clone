import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import MainSection from './MainSection'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
