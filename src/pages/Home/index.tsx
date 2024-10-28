import { useContext, KeyboardEvent } from "react";
import { Post } from "./Components/Post";
import { Profile } from "./Components/Profile";
import { SearchBar } from "./Components/SearchBar";
import { ListContainer, MainContainer, PostContainer, TextContainer } from "./styles";
import { DataContext } from "../../contexts/DataContext";
import { api } from "../../lib/axios";

interface Issue {
    number: number;
    title: string;
    body: string;
    comments: number;
    created_at: string;
    html_url: string;
}

interface IssueProps {
    id: number;
    title: string;
    body: string;
    comments: number; 
    created_at: string;
    html_url: string;
}

export function Home() {
    const { posts, updatePosts, data } = useContext(DataContext);

    const reversedPosts = [...posts].reverse();

    function handleSearch(event: KeyboardEvent<HTMLInputElement>) {
        searchAllIssuesIfInputIsEmpty(event);
        handleInputChangeOnEnter(event);
    }

    async function handleInputChangeOnEnter(event: KeyboardEvent<HTMLInputElement>) {
        const inputElement = event.target as HTMLInputElement; // Asserção de tipo
        if (inputElement.value !== "" && event.key === "Enter") {
            event.preventDefault();
            const searchTerm = inputElement.value; // Agora você pode acessar o value sem erro
            const response = await api.get(`/search/issues?q=${searchTerm} repo:${data.login}/Github-blog`);
            const issues: Issue[] = response.data.items;

            const newPosts: IssueProps[] = issues.map((issue: Issue) => ({
                id: issue.number,
                title: issue.title,
                body: issue.body,
                comments: issue.comments,
                created_at: issue.created_at,
                html_url: issue.html_url,
            }));

            const ReversedPosts = newPosts.reverse();
            updatePosts(ReversedPosts);
        }
    }

    async function searchAllIssuesIfInputIsEmpty(event: KeyboardEvent<HTMLInputElement>) {
        const inputElement = event.target as HTMLInputElement; // Asserção de tipo
        if (inputElement.value === "") {
            const response = await api.get(`/search/issues?q=repo:${data.login}/Github-blog`);
            const issues: Issue[] = response.data.items;

            const newPosts: IssueProps[] = issues.map((issue: Issue) => ({
                id: issue.number,
                title: issue.title,
                body: issue.body,
                comments: issue.comments,
                created_at: issue.created_at,
                html_url: issue.html_url,
            }));
            updatePosts(newPosts);
        }
    }

    return (
        <MainContainer>
            <Profile />
            <ListContainer>
                <TextContainer>
                    <h1>Publicações</h1>
                    <p>{posts.length} {posts.length === 1 ? 'publicação' : 'publicações'}</p>
                </TextContainer>
                <SearchBar onChange={handleSearch} />
                <PostContainer>
                    {reversedPosts.map((post) => (
                        <Post 
                            key={post.id} 
                            id={post.id.toString()} 
                            title={post.title} 
                            body={post.body}
                            date={post.created_at}
                        />
                    ))}
                </PostContainer>
            </ListContainer>
        </MainContainer>
    );
}
