import styled from "styled-components";

export const MainContainer = styled.main`

`
export const ListContainer = styled.div`
margin: 0 auto;
max-width: 54rem;
margin-top: 4rem;
padding-bottom: 14rem;
`
export const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 768px){
  width: 90%;
  margin: 0 auto;
}
h1{
    font-size: ${props => props.theme.TitleS.fontSize};
    font-family: ${props => props.theme.TitleS.fontFamily};
    line-height: ${props => props.theme.TitleS.lineHeight};
    font-weight: ${props => props.theme.TitleS.fontWeight};
    color: ${props => props.theme["base-subtitle"]};
}
p{
    font-size: ${props => props.theme.TextS.fontSize};
    font-family: ${props => props.theme.TextS.fontFamily};
    line-height: ${props => props.theme.TextS.lineHeight};
    font-weight: ${props => props.theme.TextS.fontWeight};
    color: ${props => props.theme["base-span"]};
}
`
export const PostContainer = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  @media (max-width: 768px){
  width: 90%;
  margin: 0 auto;
}
`