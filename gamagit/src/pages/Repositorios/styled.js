import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;


`
export const linker = styled.a`
    text-decoration: none;
    text-decoration-color: #fff;
`
export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`
export const Lista = styled.ul`
    text-align: center;
    list-style: none;
    padding: 0;
    font-family: sans-serif;

`
export const linkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    text-decoration: none;
`
export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;


`