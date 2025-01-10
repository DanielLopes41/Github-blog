import { InfosContainer, ProfileContainer, ProfileMain, TextContainer } from "./styles"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

export function Profile() {
    const { data } = useContext(DataContext);

    return (
        <ProfileMain>
            <ProfileContainer>
                <img src={data.avatar_url} alt={data.name} />
                <TextContainer>
                    <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                        GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                    <h1>{data.name}</h1>
                    <p>{data.bio}</p>
                    <InfosContainer>
                        <p><FontAwesomeIcon icon={faGithub} /> {data.login}</p> 
                        <p><FontAwesomeIcon icon={faBuilding} /> {data.company ? data.company : '-'}</p>
                        <p><FontAwesomeIcon icon={faUserGroup} /> {data.followers} {data.followers === 1 ? 'seguidor' : 'seguidores'}</p>
                    </InfosContainer>
                </TextContainer>
            </ProfileContainer>
        </ProfileMain>
    );
}
