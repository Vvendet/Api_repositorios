import React, {useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';



function Home(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repos = response.data
      let reposName = []
      repos.map((r) => {
        reposName.push(r.name)
      })
      localStorage.setItem('RepositoriesName', JSON.stringify(reposName))
      history.push('/repositories')
    })
  }
  return (
    <>
      <S.Container>     
      
      <S.Input className="inputUser" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>

    </>

  );
}

export default Home;

