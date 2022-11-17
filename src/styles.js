import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: 000;
        font-size: 25px;
    }
`

export const Content = styled.div `
    background-color: #FFF;
    width: 50%;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`