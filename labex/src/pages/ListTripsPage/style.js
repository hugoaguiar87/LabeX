import styled from "styled-components";



export const Main = styled.main`
    min-height: 75vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
    width: 100%;

    h1{
        color: red;
        width: 100%;
    }

`

export const Trip = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 10px;
    border: 1px solid black;
    margin: 10px;
    width: 30%;
    height: 50vh;
    box-shadow: 1px 1px;
    border-radius: 10px;
    gap: 10px;
    font-size: 18px;
    p{
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    /* div{
        display: flex;
        flex-direction: column;
        gap: 5px;

        p{
            width: 100%;
            text-overflow: ellipsis;
        }
    } */
`