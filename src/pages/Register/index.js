import React, { useState } from 'react';
import './styles.css'; 
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from  'react-router-dom';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function  handleRegister(e){
    e.preventDefault();
    const data = {name, email, whatsapp, city, uf};
    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID é: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return(
   <div className="register-container">
     <div className="content">
       <section>
        <img src={logoImg} alt="logo!"/>
        <h1>Cadastro</h1>
        <p>Faça seu cadastro. entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.  </p>
        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#e02041" />
            Voltar.
       </Link>
       </section>
       <form onSubmit={handleRegister}>
         <input 
          value={name} 
          onChange={e => setName(e.target.value)}
          placeholder="Nome da ONG"
         />

         <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
         <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp" />
         <div className="input-group">
          <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade" />
          <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }} />
         </div>
         <button className="button"  type="submit">CADASTRAR</button>
       </form>
     </div>
   </div>
  );
}