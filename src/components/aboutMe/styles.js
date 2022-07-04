import styled from "styled-components";


export const AboutMeContent = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background: #EFF6E0;
    color: #01161E;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width: 768px) {
                flex-direction: row;
                height: 90vh;
                
            }
`

export const Title = styled.div`
       display: flex;
        align-items: center;        
        justify-content: center;
        width: 90%;       
       

        section{
            display: flex;            
            flex-direction: column;
            width: 100%;
            margin-bottom: 20px;
        
            h2{
             font-size:3rem;
             margin-bottom: 1rem;
             align-self: center;

            }
            p{
                width: 80%;
                font-size: 1rem;
                margin: 0.5rem;
                align-self: center;
            }

        }

    @media screen and (min-width: 768px) {
        width: 48%;
        

        section{
            margin-bottom: 0;
            width: 90%;
            h2{
                align-self: flex-start;
            }
            p{
                align-self: flex-start;
            }
        }
                
    }    
        
`
export const MyImage = styled.div`
         display: flex;
            align-items: center; 
            justify-content: center;
            width: 90%;
            margin-top:20px;
            margin-bottom: 20px;
         

            figure{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 350px;
                height: 350px;

                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }

    @media screen and (min-width: 768px) {
        width: 48%;
        margin-top:0;
        margin-bottom: 0;
        
        
                
    }  

            

`