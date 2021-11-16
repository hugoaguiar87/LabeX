import styled from "styled-components";

export const Header = styled.header`
    background-color: black;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;

    h2{
        color: white;
        font-size: 35px;
    }

    div{
        display: flex;
        justify-content: space-between;
        gap: 15px;

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
    
`
