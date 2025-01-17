import * as DropdownMenu  from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-end;
  background-size: cover;
  justify-content: end;
  img {
    width: 100vw;
  }
  @media(max-width: 768px) {
    display: none;
  }
`;

export const DropDownMenuButton = styled.button`
  position: absolute;
  border-radius: 200px;
  padding: 0.5rem;
  margin-right: 300px;
  margin-bottom: 100px;
  align-items: center;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
  @media(max-width: 768px) {
    display: none;
  }
`;

export const Content = styled(DropdownMenu.Content)`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input {
      padding: 0.5rem;
      background-color: ${(props) => props.theme["base-input"]};
      border: none;
      width: 90%;
      margin: 0 auto;
    }
    button {
      padding: 0.5rem;
    }
  }
`;
