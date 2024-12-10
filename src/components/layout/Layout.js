import React from "react";
import Header from "../Header/Header";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../footer/Footer";
function Layout(){
    return(
    <>
      <Header/>
      <AppRoutes />
      <Footer/>
    </>
    )
}
export default Layout;