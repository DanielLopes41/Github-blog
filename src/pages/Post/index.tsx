import { useContext } from "react";
import { PostInfo } from "./PostInfo";
import { PostPageContainer, TextContainer } from "./styles";
import { DataContext } from "../../contexts/DataContext";
import ReactMarkDown from "react-markdown";
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

    const CodeComponent: React.FC<{
        inline: boolean;
        className?: string;
        children: ReactNode;
    }> = ({ inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    };

    return (
        <PostPageContainer>
            <PostInfo />
            <TextContainer>
                <ReactMarkDown
                    components={{
                        code: CodeComponent,
                    }}
                >
                    {post.body}
                </ReactMarkDown>
            </TextContainer>
        </PostPageContainer>
    );
}
