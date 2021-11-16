import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 75vh;
    margin-bottom: 40px;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    

        input{
            width: 482px;
            height: 30px;
            border-radius: 10px;
            padding: 4px 8px;
            border-width: 1px;
            border-color: gray;
            margin: 0px 0px 15px;
        }

        select{
            width: 500px;
            height: 40px;
            border-radius: 10px;
            padding: 4px 8px;
            border-width: 1px;
            margin: 0px 0px 15px;
        }

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