import styled from "styled-components";

export const SearchBarContainer = styled.div`
width: 100%;
margin-top: 1rem;
@media (max-width: 768px){
  width: 90%;
  margin: 0 auto;
}
`
export const SearchBarInput = styled.input`
padding: 0.75rem 1rem;
border: 1px solid ${props => props.theme["base-border"]};
background-color: ${props => props.theme["base-input"]};
font-size: ${props => props.theme.TextM.fontSize};
    font-family: ${props => props.theme.TextM.fontFamily};
    line-height: ${props => props.theme.TextM.lineHeight};
    font-weight: ${props => props.theme.TextM.fontWeight};
    color: ${props => props.theme["base-label"]};
    border-radius: 6px;
    width: 100%;
    margin-bottom: 3rem;
`