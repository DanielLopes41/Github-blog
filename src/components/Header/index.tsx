import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropDownMenuButton, HeaderContainer } from "./styles";
import HeaderImg from "../../assets/Cover.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NewUserMenu } from "./NewUserMenu";

export function Header() {
  return (
    <HeaderContainer>
      <img src={HeaderImg} alt="" />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <DropDownMenuButton>
            <HamburgerMenuIcon style={{ width: 24, height: 24 }} />
          </DropDownMenuButton>
        </DropdownMenu.Trigger>
        <NewUserMenu /> 
      </DropdownMenu.Root>
    </HeaderContainer>
  );
}
