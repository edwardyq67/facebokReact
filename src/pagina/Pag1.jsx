import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkgetInformacion } from "../store/slices/InformacionImg.slice";
import "./css/pagina.css";
import botonRetroceso from "../1. ASSETS/back.png";
import botonGren from "../1. ASSETS/but1.png";
import botontype from "../1. ASSETS/but_options.png";
import corazon from "../1. ASSETS/icon_options.png";
import botonEnviar from "../1. ASSETS/card_button.png";
import { useNavigate, useParams } from "react-router-dom";

const Pag1 = () => {
    const { nombre } = useParams(); 
  const dispatch = useDispatch();
  const getFacebook = useSelector((state) => state.informacionSlice);
  useEffect(() => {
    dispatch(thunkgetInformacion());
  }, []);
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  
  const atraz=()=>{
    navigate(-1);
  }
  const opciones=()=>{
    
    const color = prompt('red,blue,green,yellow');
   

    dispatch(thunkgetInformacion(color));
  }
  return (
    <div className="Pag1">
      <div className="contenedorBotonet">
        <div className="botonleft">
          <img className="atraz" onClick={()=>atraz()} src={botonRetroceso} alt="" />
          <div className="boton1Conten">
            <img src={botonGren} alt="" />
            <h4>GREENHOUS</h4>
          </div>
        </div>
        <div className="bienvenido">
           <h2>Bienvenido {user}</h2> 
        </div>
        
        <div className="botonRight">
            
          <div onClick={()=>opciones()} className="botonTypy">
          
            <img src={botontype} alt="" />
            <div className="contenido">
              <h4>TYPE</h4>
              <img src={corazon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contendorItems">
        {getFacebook?.map((item) => (
          <div key={item.id} className="items">
            <div className="imgItem">
              <img src={item.imagen} alt="" />
              <div className="posicionColorh4">
                <h4>{item.posicion} {item.id}</h4>
              <div
                className="color"
                style={{
                  backgroundColor: item.color,
                  width: "30px",
                  border: "3px solid white",
                  height: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              </div>
              <div className="boton">
                <img src={botonEnviar} alt="" />
                <h4>ENVIAR</h4>
              </div>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Pag1;
