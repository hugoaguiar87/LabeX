import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 100vh;
    color: slategray;

    .containerPai{
        border: 1px solid black;
        height: 40vh;
        width: 35vw;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        box-shadow: 5px 2px  5px 5px gray;

        div{
            display: flex;
            justify-content: space-between;
            gap: 25px;

            button{
                cursor: pointer;
                height: 40px;
                border: none;
                padding: 0px 20px;
                color: white;
                font-size: 16px;
                min-width: 100px;
                border-radius: 20px;
                background-color: slategray;
            }
            button:hover{
                background-color: #2f4f4f;
            }
        }
    }
`