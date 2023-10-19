import React, { useState } from 'react';
import './css/iniciar.css'
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Iniciar = ({nombret}) => {
    const[nombre,setNombre]=useState(nombret)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        navigate('/abeja')
        dispatch(changeUser(nombre))
    }
    return (
        <div className='Iniciar'>
            <div className="envianombre">
                <form onSubmit={submit}>
                <input value={nombre} onChange={e=>setNombre(e.target.value)} id='nombre' autoComplete='off' type="text" placeholder='NOMBRE' />
                <label onClick={submit} htmlFor="nombre">ENVIAR</label>
                
                </form>
                
            </div>
        </div>
    );
};

export default Iniciar;