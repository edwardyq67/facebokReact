import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pag1 from "./pagina/Pag1";
import { useSelector } from "react-redux";
import Loading from "./nav/Loading";
import AppNavbar from "./nav/AppNavbar";
import abeja from "./1. ASSETS/user_bee.png";
import miel from "./1. ASSETS/hony.png";
import Iniciar from "./pagina/Iniciar";
function App() {
  const[nombret,setNombret]=useState("")
  const loading = useSelector((state) => state.isLoading);
  useEffect(() => {
    function handleOrientationChange() {
      if (window.orientation === 90 || window.orientation === -90) {
        document.documentElement.style.transform = 'rotate(90deg)';
      } else {
        document.documentElement.style.transform = 'none';
      }
    }

    window.addEventListener('orientationchange', handleOrientationChange);

    handleOrientationChange();

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      <div className="overlayst"></div>
      <BrowserRouter>
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<Iniciar nombret={nombret}/>}/>
          <Route
            path="/abeja"
            element={
              <>
                <AppNavbar />
                <Pag1 />
                <div className="abejaMiel">
                  <div className="abeja">
                    <img className="abejaimg" src={abeja} alt="" />
                    <div className="contmiel">
                      <h4>DRBeebeep</h4>
                      <div className="miel">
                        <img className="mielImg" src={miel} alt="" />
                        <h4 className="number">999,999</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
