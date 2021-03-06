import React, { useState } from 'react';
import './styles.css'; 
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from  'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';
export default function Logon(){

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
      
    try {
      const response = await api.post('sessions', { id });
      //console.log(response.data .name);
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name); 
      history.push('/profile');
    } catch (error) {
        alert('Falha no login, tente novamente.')
    }
  }


  return(
   <div className="logon-container">
     <section className="form">
     <img src={logoImg} alt="logo!"/>
     <form onSubmit={handleLogin}>
       <h1>FAÇA SEU LOGON</h1>
       <input value={id} onChange={e => setId(e.target.value)} placeholder="Seu ID" />
       <button className="button" type="submit">ENTRAR</button>
       <Link className="back-link" to="/register">
       <FiLogIn size={16} color="#e02041" />
       Não tenho cadastro.
       </Link>
     </form>
     </section>
     <img src={heroesImg} alt="Be The Hero!" />
   </div>
  );
}