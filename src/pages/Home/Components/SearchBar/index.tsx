import { SearchBarContainer, SearchBarInput } from "./styles";

export function SearchBar({ onChange }) {
    return (
        <SearchBarContainer>
            <SearchBarInput 
                type="text" 
                placeholder="Buscar Conteúdo" 
                onChange={onChange} 
                onKeyDown={onChange} 
            />
        </SearchBarContainer>
    );
}
