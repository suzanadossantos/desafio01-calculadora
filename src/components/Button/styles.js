import styled from "styled-components";

export const ButtonContainer = styled.button `
    padding: 20px;
    border: 1px solid #CDCDCD;
    border-radius: 5px;
    background-color: #029b99;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }

    .destaque{
        color: #000;
    }
`