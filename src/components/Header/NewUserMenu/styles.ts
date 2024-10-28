import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const Content = styled(DropdownMenu.Content)`
padding: 4rem;
display: flex;
gap: 2rem;
margin-top: 4rem;
background-color: ${props => props.theme["base-post"]};
border-radius: 10px;
form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input{
        padding: 0.5rem;
        background-color: ${props => props.theme["base-input"]};
        border: none;
        margin: 0 auto;
        color: white;
    }
    button{
        padding: 0.5rem;
    }
}
`