import styled from "styled-components";

export const PostInfoContainer = styled.div`
width: 54rem;
height: 10.5rem;
background-color: ${props => props.theme["base-profile"]};
border: 10px;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: -6rem;
border-radius: 10px;
@media (max-width:768px) {
         width: 95%;
         margin-top: 2rem;
    }
`
export const ContentContainer = styled.div`
width: 90%;
margin: 0 auto;
p{
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
h1{
    font-size: ${props => props.theme.TitleL.fontSize};
    font-family: ${props => props.theme.TitleL.fontFamily};
    line-height: ${props => props.theme.TitleL.lineHeight};
    font-weight: ${props => props.theme.TitleL.fontWeight};
    color: ${props => props.theme["base-title"]};
}
nav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    font-size: ${props => props.theme.Link.fontSize};
    font-family: ${props => props.theme.Link.fontFamily};
    line-height: ${props => props.theme.Link.lineHeight};
    font-weight: ${props => props.theme.Link.fontWeight};
    color: ${props => props.theme.blue};
    a, button{
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${props => props.theme.blue};
        text-decoration: none;
        border: none;
        background-color: ${props => props.theme["base-profile"]};
    }
    a{
        &:hover{
            text-decoration: underline;
        }
    }
}
span{
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
    font-size: ${props => props.theme.TextM.fontSize};
    font-family: ${props => props.theme.TextM.fontFamily};
    line-height: ${props => props.theme.TextM.lineHeight};
    font-weight: ${props => props.theme.TextM.fontWeight};
    color: ${props => props.theme["base-span"]};
    white-space: nowrap;
    @media (max-width:768px) {
         width: 70%;
         gap: 0.2rem;
    }
    p{
        @media (max-width:768px) {
         gap: 0.2rem;
    }
    }
}
`