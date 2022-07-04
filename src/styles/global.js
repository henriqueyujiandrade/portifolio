import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
          * {
            margin: 0;
            padding: 0;
            box-sizing:border-box;
            outline:0
                 }

        body{
            background: #fff;
            width:100vw ;
            height: auto;
            font-family: 'Roboto', sans-serif;
            overflow-y:auto ;
        }
        a{
          text-decoration:none;
          color: inherit;
        }
`

export default GlobalStyle