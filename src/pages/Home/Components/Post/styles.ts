import styled from "styled-components";
export const PostContainer = styled.button`
background-color: ${props => props.theme["base-post"]};
height: 16.25rem;
border-radius: 10px;
display: flex;
align-items: center;
text-align: start;
border: none;
padding: 0; 
&:hover{
  cursor: pointer; 
  outline: 2px solid ${props => props.theme["base-label"]};
}
 .MainText{
    font-size: ${props => props.theme.TextM.fontSize};
    font-family: ${props => props.theme.TextM.fontFamily};
    line-height: ${props => props.theme.TextM.lineHeight};
    font-weight: ${props => props.theme.TextM.fontWeight};
    color: ${props => props.theme["base-span"]};
    display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical; 
}
`
export const PostHeaderText = styled.div`
display: flex;
gap: 2rem;
align-items: baseline;
justify-content: space-between;
h1{
    font-size: ${props => props.theme.TitleM.fontSize};
    font-family: ${props => props.theme.TitleM.fontFamily};
    line-height: ${props => props.theme.TitleM.lineHeight};
    font-weight: ${props => props.theme.TitleM.fontWeight};
    color: ${props => props.theme["base-title"]};
    margin-bottom: 1rem;
}
p{
    font-size: ${props => props.theme.TextS.fontSize};
    font-family: ${props => props.theme.TextS.fontFamily};
    line-height: ${props => props.theme.TextS.lineHeight};
    font-weight: ${props => props.theme.TextS.fontWeight};
    color: ${props => props.theme["base-span"]};
    white-space: nowrap;
}

`
export const PostText = styled.div`
width: 85%;
margin: 0 auto;
`