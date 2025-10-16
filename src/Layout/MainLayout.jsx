import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
