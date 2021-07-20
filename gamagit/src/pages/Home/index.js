import React, {useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';



function Home(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')
  const [ erro, setErro] = useState(false);



  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repos = response.data
      let reposName = []
      repos.map((r) => {
        reposName.push(r.name)
      })
      localStorage.setItem('RepositoriesName', JSON.stringify(reposName))
      setErro(false)
      history.push('/repositories')
    })
    .catch(err => {
      setErro(true)
    })
  }
  return (
    <>
    <S.HomeContainer>
      <S.Container>     
      
      <S.Input className="inputUser" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      { erro ? <S.ErrorMsg>Ocorreu um erro</S.ErrorMsg> : ''}
      </S.Container>
      
      </S.HomeContainer>
    </>

  );
}

export default Home;

