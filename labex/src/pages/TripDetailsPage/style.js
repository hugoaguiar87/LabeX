import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;
    min-height: 75vh;

    .container{
        border-right: 1px solid gray;
        margin: 3px;
    }
`

export const CandidatePending= styled.div`
    border: 1px solid gray;
    margin: 3px;
    border-radius: 15px;
    padding-bottom: 10px;

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
                margin-left: 5px;
            }
            button:hover{
                background-color: #2f4f4f;
            }
`

export const ApprovedCandidate= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const DetailsTrip = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
`