import React, { useEffect } from "react";
import fondoBoton from "../1. ASSETS/header_menu.png";
import icon1 from "../1. ASSETS/icon_menu.png";
import icon2 from "../1. ASSETS/icon_menu2.png";
import pieNav from "../1. ASSETS/header_bg.png";
import "./css/appNavbar.css";
const AppNavbar = () => {
  return (
    <div className="AppNavbar">
      <div className="contenedorBotones">
        <div className="obcionesbotones">
          <div className="contenedoricon">
            <img className="fondoBoton" src={fondoBoton} alt="" />
            <div className="texto">
              <img className="iconfondo" src={icon1} alt="" />
            <h4>CONTINENTS</h4>
            </div>
            
          </div>
          <div className="contenedoricon">
            <img className="fondoBoton" src={fondoBoton} alt="" />
            <div className="texto">
              <img className="iconfondo" src={icon2} alt="" />
            <h4>CONTINENTS</h4>
            </div>
            
          </div>
          <div className="contenedoricon">
            <img className="fondoBoton" src={fondoBoton} alt="" />
            <div className="texto">
              <img className="iconfondo" src={icon2} alt="" />
            <h4>CONTINENTS</h4>
            </div>
            
          </div>
          <div className="contenedoricon">
            <img className="fondoBoton" src={fondoBoton} alt="" />
            <div className="texto">
              <img className="iconfondo" src={icon1} alt="" />
            <h4>CONTINENTS</h4>
            </div>
            
          </div>
        </div>
        <div className="imgpie">
            <img src={pieNav} alt="" />
        </div>
        <div className="implementobotones">
          <div className="icon">
            <img src={icon1} alt="" />
          </div>
          <div className="icon">
            <img src={icon2} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AppNavbar;
