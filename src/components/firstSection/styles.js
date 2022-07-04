import styled from "styled-components";




export const FirstContent = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 90vh;
    background: #01161E;
    color: #EFF6E0;
    justify-content: center;
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
        width: 80%;       
       

        section{
            display: flex;            
            flex-direction: column;
            width: 90%;
        
            h2{
             font-size:1.8rem;

            }
            p{
                width: 100%;
                font-size: 1.4rem;
            }

        }

        @media screen and (min-width: 768px) {
                width: 48%;
                
                section{
                
                    h2{
                    font-size:3rem;
                    margin-bottom: 1rem;

                    }
                    p{
                        width: 80%;
                        font-size: 2rem;
                    }

                }
        }
`

export const Image = styled.div`
         display: flex;
            align-items: center; 
            justify-content: center;
            width: 80%;  
         

            figure{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 300px;
                height: auto;
                margin-bottom: 20px;

                img{
                    width: 100%;
                    border-radius: 1rem;
                }
            }

            @media screen and (min-width: 768px) {
                width: 48%;
                figure{
                    margin-bottom: 0px;
                    width: 500px;
                }
                
            }

            

`