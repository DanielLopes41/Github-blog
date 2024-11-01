import styled from "styled-components";

export const ProfileMain = styled.main`
display: flex;
border-radius: 10px;
background-color: ${props => props.theme["base-profile"]};
height: 13.25rem;
max-width: 54rem;
align-items: center;
margin-top: -6rem;
position: relative;
margin-inline: auto;
@media (max-width:768px) {
        width: 90vw;
        margin-top: 1rem;
    }
img{
    border-radius: 8px;
    max-width: 9.25rem;
    max-height: 9.25rem;
    @media (max-width:768px) {
        max-width: 4.25rem;
        max-height: 6.25rem;
    }
}
`
export const ProfileContainer = styled.div`
 width: 90%;
 display: flex;
 margin: 0 auto;
 align-items: center;
 @media (max-width:768px) {
        width: 100%;
        align-items: start;
    }
`
export const TextContainer = styled.div`
padding-left: 1.5rem;
display: flex;
flex-direction: column;
@media (max-width:768px) {
        padding-left: 0.2rem;
    }
a{
    font-size: ${props => props.theme.Link.fontSize};
    font-family: ${props => props.theme.Link.fontFamily};
    line-height: ${props => props.theme.Link.lineHeight};
    font-weight: ${props => props.theme.Link.fontWeight};
    color: ${props => props.theme.blue};
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
}
h1{
    font-size: ${props => props.theme.TitleL.fontSize};
    font-family: ${props => props.theme.TitleL.fontFamily};
    line-height: ${props => props.theme.TitleL.lineHeight};
    font-weight: ${props => props.theme.TitleL.fontWeight};
    color: ${props => props.theme.white};
}
p{
    font-size: ${props => props.theme.TextM.fontSize};
    font-family: ${props => props.theme.TextM.fontFamily};
    line-height: ${props => props.theme.TextM.lineHeight};
    font-weight: ${props => props.theme.TextM.fontWeight};
    color: ${props => props.theme["base-text"]};
    margin-top: 0.8rem;
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
}
`
export const InfosContainer = styled.span`
display: flex;
gap: 1.5rem;
@media (max-width:768px) {
       gap: 0.5rem;
       white-space: nowrap;
       margin-left: -2rem;
    }
p{
    font-size: ${props => props.theme.TextM.fontSize};
    font-family: ${props => props.theme.TextM.fontFamily};
    line-height: ${props => props.theme.TextM.lineHeight};
    font-weight: ${props => props.theme.TextM.fontWeight};
    color: ${props => props.theme["base-subtitle"]};
    gap: 0.5rem;
    display: flex;
    @media (max-width:768px) {
    font-size: 0.8rem;
    }
    svg{
        width: 18px;
        height: 18px;
        color: ${props => props.theme["base-label"]};
    }
}
`
