import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../lib/axios";

interface IssueProps {
    id: number;
    title: string;
    body: string;
    created_at: string;
    html_url: string;
    comments: number;
}

interface UserDataProps {
    login: string;
    id: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    company: string;
    followers: number;
}

interface DataContextType {
    data: UserDataProps; 
    posts: IssueProps[];
    updatePosts: (posts: IssueProps[]) => void;
    setUsername: (username: string) => void;
    setRepoName: (repoName: string) => void;
    username: string;
    repoName: string;
}

export const DataContext = createContext<DataContextType>({} as DataContextType);

interface DataProviderProps {
    children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
    const [data, setData] = useState<UserDataProps>({} as UserDataProps); 
    const [username, setUsername] = useState("DanielLopes41");
    const [repoName, setRepoName] = useState("Github-blog");
    const [posts, updatePosts] = useState<IssueProps[]>([]);

    async function dataFetch() {
        const response = await api.get<UserDataProps>(`/users/${username}`);
        setData(response.data);
    }

    useEffect(() => {
        dataFetch();
    }, [username]);

    async function IssuesFetch() {
        if (data) { 
            const response = await api.get<{ items: IssueProps[] }>(`/search/issues?q=repo:${data.login}/${repoName}`);
            const newPosts = response.data.items.map(issue => ({
                id: issue.id,
                title: issue.title,
                body: issue.body,
                created_at: issue.created_at,
                html_url: issue.html_url,
                comments: issue.comments,
            }));
            updatePosts(newPosts);
        }
    }

    useEffect(() => {
        IssuesFetch();
    }, [data, repoName]);

    return (
        <DataContext.Provider value={{ data, posts, updatePosts, setUsername, setRepoName, username, repoName }}>
            {children}
        </DataContext.Provider>
    );
}
