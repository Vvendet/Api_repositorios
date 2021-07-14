import React, {useEffect, useState} from 'react';
import Routes from '../../routes';
import * as S from './styled';

export default function Repositories(){
    const [repositories, setRepositories] = useState([])
    const funcao = () =>{
        let reposN = localStorage.getItem('RepositoriesName')
        reposN = JSON.parse(reposN)
        setRepositories(reposN)

    }
    useEffect(funcao, [])
    return(
        <>
        <S.Title>Repositórios:</S.Title>
        <S.Container>
        <S.Lista>
            {
                repositories.map(repository => {
                    const link = `https://github.com/Vvendet/${repository}`
                    return(
                        <>
                    <S.ListItem>       
                        <S.linker href={link}  target="_blank">
                            {repository}
                        </S.linker>
                    </S.ListItem>
                    </>
                )})
            }

        </S.Lista>
        </S.Container>
        </>
    )
}