import styled from "styled-components";

export const PostPageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const TextContainer = styled.div`
max-width: 54rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
padding: 2.5rem 2rem;
justify-content: center;
font-size: ${props => props.theme.TextM.fontSize};
    font-family: ${props => props.theme.TextM.fontFamily};
    line-height: ${props => props.theme.TextM.lineHeight};
    font-weight: ${props => props.theme.TextM.fontWeight};
    color: ${props => props.theme["base-text"]};
img{
  max-width: 100%;
}
h1,
h2,
h3{
    color: ${props => props.theme.blue};
    padding-top: 2rem;
}
pre{
    background-color: ${props => props.theme["base-post"]};
    padding: 1rem;
    > div {
        background: none !important;
        padding: 0 !important;
        margin: 0 !important;
        code{
            font-family: "Fira Code", monospace !important;
            line-height: 160% !important;
            font-weight: 400 !important;
            font-style: normal !important;
        }
    }
}

`