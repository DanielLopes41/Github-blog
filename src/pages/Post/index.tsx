import { useContext } from "react";
import { PostInfo } from "./PostInfo";
import { PostPageContainer, TextContainer } from "./styles";
import { DataContext } from "../../contexts/DataContext";
import ReactMarkdown, { Components } from "react-markdown";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactNode } from 'react';

export function PostPage() {
    const { id } = useParams();
    const { posts } = useContext(DataContext);

    const post = posts.find(post => post.id === Number(id));

    if (!post) {
        return <p>Post não encontrado</p>;
    }

    const CodeComponent = ({ className, children }: {
        className?: string;
        children?: ReactNode; 
    }) => {
        const match = /language-(\w+)/.exec(className || '');
        return match ? (
            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className}>
                {children}
            </code>
        );
    };

    const components: Components = {
        code: CodeComponent,
    };

    return (
        <PostPageContainer>
            <PostInfo />
            <TextContainer>
                <ReactMarkdown components={components}>
                    {post.body}
                </ReactMarkdown>
            </TextContainer>
        </PostPageContainer>
    );
}
