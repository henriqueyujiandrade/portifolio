import styled from "styled-components";


export const Li = styled.li`
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #124559;
        width: 380px;
        box-shadow: 0px 0px 10px 0px #AEC3B0;       
        border-radius: 8px;
        border: 1px solid #AEC3B0;
        height: 400px;
        :hover{
            border: 1px solid #598392;
            box-shadow: 0px 0px 10px 0px #598392;  
        }

        h3{
            margin-bottom: 10px;
            font-size: 2rem;
        }

`

export const FigureProject = styled.figure`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
        img{
            width: 100%;
            border-radius: 8px;
        }
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 15px;
    a{
        background: #598392;
        border-radius: 2px;
        border: 1px solid #AEC3B0;
        text-align: center;
        
        :hover{
            box-shadow: 0px 0px 10px 0px #598392;
        }
    }
`

export const Ol = styled.ol`
        display: flex;
        flex-direction: column;
        width: 80%;

`