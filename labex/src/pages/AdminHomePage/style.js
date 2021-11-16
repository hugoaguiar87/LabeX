import styled from "styled-components";

export const Trip = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border: 1px solid gray;
    margin-bottom: 10px;
    width: 40vw;
    height: 10vh;
    border-radius: 20px;
    box-shadow: 1px 1px gray;
    button{
                cursor: pointer;
                height: 40px;
                border: none;
                padding: 0px 20px;
                color: white;
                font-size: 12px;
                min-width: 10px;
                border-radius: 20px;
                background-color: slategray;
                margin-left: 5px;
            }
            button:hover{
                background-color: #2f4f4f;
            }

    

`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    min-height: 75vh;
`

export const ButtonCreateTrip = styled.button`
    cursor: pointer;
    height: 40px;
    border: none;
    padding: 0px 20px;
    color: white;
    font-size: 16px;
    min-width: 100px;
    border-radius: 20px;
    background-color: slategray;

    :hover{
        background-color: #2f4f4f;
    }
`