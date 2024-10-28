import { createGlobalStyle } from "styled-components";

   export const GlobalStyle = createGlobalStyle`
   * {
    margin:  0;
    padding: 0;
    box-sizing: border-box;
    }
    body{
      background-color: ${props => props.theme["base-background"]};
    }
    input{
      &:focus{
        color: ${props => props.theme["base-text"]}; 
        border-color: ${props => props.theme.blue}; 
        outline: none;
      }
    }
    `