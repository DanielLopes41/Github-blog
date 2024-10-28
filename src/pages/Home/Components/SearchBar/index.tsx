import { SearchBarContainer, SearchBarInput } from "./styles";

interface SearchBarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function SearchBar({ onChange, onKeyDown }: SearchBarProps) {
    return (
        <SearchBarContainer>
            <SearchBarInput 
                type="text" 
                placeholder="Buscar Conteúdo" 
                onChange={onChange} 
                onKeyDown={onKeyDown} 
            />
        </SearchBarContainer>
    );
}
