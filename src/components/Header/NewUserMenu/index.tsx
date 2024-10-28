import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Content } from "./styles";
import { useContext, FormEvent } from "react";
import { DataContext } from "../../../contexts/DataContext";

export function NewUserMenu() {
  const { setUsername, setRepoName } = useContext(DataContext);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = event.currentTarget.username.value;
    const repoName = event.currentTarget.repoName.value;

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
