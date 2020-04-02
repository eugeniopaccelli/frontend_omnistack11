import React from 'react';
import './styles.css'; 
import { FiLogIn } from 'react-icons/fi';
import { Link } from  'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
  return(
   <div className="logon-container">
     <section className="form">
     <img src={logoImg} alt="logo!"/>
     <form>
       <h1>FAÇA SEU LOGON</h1>
       <input placeholder="Seu ID" />
       <button className="button" type="submit">ENTRAR</button>
       <Link to="/register">
       <FiLogIn size={16} color="#e02041" />
       Não tenho cadastro.
       </Link>
     </form>
     </section>
     <img src={heroesImg} alt="Be The Hero!" />
   </div>
  );
}