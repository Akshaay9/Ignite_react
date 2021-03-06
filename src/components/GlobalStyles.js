import {createGlobalStyle} from "styled-components"
const GlobalStyle=createGlobalStyle `
*{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
}
html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2.5rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem 0rem;
    }
    h4{
        padding:0.5rem 1rem 0px 1rem;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display:block;
    }
}
`
export default GlobalStyle