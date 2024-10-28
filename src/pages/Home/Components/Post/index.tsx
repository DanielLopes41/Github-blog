import { useNavigate } from "react-router-dom";
import { PostContainer, PostHeaderText, PostText } from "./styles";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale"
interface PostProps {
  id: string;
  title: string;
  body: string;
  date: string;
}

export function Post({ id, title, body, date }: PostProps) {
  const navigate = useNavigate();
  const dateDistance = formatDistance(new Date(date), new Date(), { locale: pt })
  function handlePostClick() {
    navigate(`/Post/${id}`);
  }
  function convertMarkdown(markdown : string){
    return markdown.replace(/([#*_~`]|<\/?[^>]+(>|$))/g, '');
  }
  return (
    <PostContainer onClick={handlePostClick}>
      <PostText>
        <PostHeaderText>
          <h1>{title}</h1>
          <p>Há {dateDistance}</p>
        </PostHeaderText>
        <p className="MainText">
        {convertMarkdown(body)}
        </p>
      </PostText>
    </PostContainer>
  );
}
