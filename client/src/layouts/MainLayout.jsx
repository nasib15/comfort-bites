import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto px-6">
        <Navbar></Navbar>
        <div className="min-h-[85vh]">
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
