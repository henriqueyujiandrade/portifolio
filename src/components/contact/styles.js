import styled from "styled-components";


export const FooterContent = styled.footer` 
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #124559;
        color: #AEC3B0;
        height: 100px;
`

export const ContactDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 100%;
        gap: 20px;
        

        h2{
            font-size: 1.2rem;
        
        }
        
        nav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;

            a{
             font-size: 1.2rem;
             background-color: #01161E;
             width: 90px;
             text-align: center;
             border-radius: 5px;
             border: 2px solid #AEC3B0;
             box-shadow: 0px 0px 10px 0px #AEC3B0;

             :hover{
                cursor: pointer;
                background: #598392;
             }
            }
            
        }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;

        h2{
            font-size: 1.5rem;
        }
                
    }    

`