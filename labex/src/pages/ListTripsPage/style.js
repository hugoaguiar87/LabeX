import styled from "styled-components";



export const Main = styled.main`
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    h1{
        color: red;
    }
`

export const Trip = styled.table`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 10px;
    border: 1px solid black;
    margin: 10px;
    width: 30vw;
    height: 50vh;
    box-shadow: 1px 1px;
    border-radius: 10px;
    gap: 10px;
    font-size: 18px;
    div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`