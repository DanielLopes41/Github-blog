import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Content } from "./styles";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

export function NewUserMenu() {
  const { setUsername, setRepoName } = useContext(DataContext);

  function handleSubmit(event) {
    event.preventDefault();
    
    const name = event.target.username.value;
    const repoName = event.target.repoName.value;
    console.log(name, repoName)
    setUsername(name);
    setRepoName(repoName);
  }

  return (
    <DropdownMenu.Portal>
      <Content>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            defaultValue=""
            required
          />
          <input
            type="text"
            name="repoName"
            placeholder="Nome do repositório"
            defaultValue="" 
            required
          />
          <button type="submit">Trocar Usuário</button>
        </form>
      </Content>
    </DropdownMenu.Portal>
  );
}
