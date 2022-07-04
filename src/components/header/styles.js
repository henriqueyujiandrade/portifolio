import styled from "styled-components";


export const HeaderContent = styled.header` 
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #124559;
        color: #AEC3B0;
        height: 100px;
`

export const LogoNavDiv = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 100%;
        overflow-x: hidden;

        h1{
            font-size: 1.5rem;
        
        }
        
        nav{
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            width: 200px;
            height: 80%;

            a{
             font-size: 1.2rem;

             :hover{
                cursor: pointer;
                background: #598392;
             }
            }
            
        }

`