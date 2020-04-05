import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from  'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';



export default function NewIncident(){

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  const [title, setTitle] = useState('title');
  const [description, setDescription] = useState('description');
  const [value, setValue] = useState('value');

  async function HandleNewIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    }

    try {
      await  api.post('/incidents', data, { headers : {
        Authorization: ongId
      }});
      history.push('/profile');
    } catch (error) {
      alert('Não foi possível cadastrar o incident.')
    }

   
  }

  return(
    <div className="new-incident-container">
     <div className="content">
       <section>
        <img src={logoImg} alt="logo!"/>
        <h1>Cadastrar Novo Caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#e02041" />
            Voltar.
       </Link>
       </section>
       <form onSubmit={HandleNewIncident}>
         <input  placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)} />
         <textarea  placeholder="Nome da ONG" value={description} onChange={e => setDescription(e.target.value)} />
         <input  placeholder="R$" value={value} onChange={e => setValue(e.target.value)} />
         <button className="button"  type="submit">CADASTRAR</button>
       </form>
     </div>
   </div>
  );
}