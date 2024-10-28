import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ContentContainer, PostInfoContainer } from './styles';
import { useNavigate, useParams } from 'react-router-dom'; 
import { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale'; 

export function PostInfo() {
  const { data, posts } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  function handleReturn() {
    navigate('/');
  }

  const post = posts.find(post => post.id === Number(id))!;

  return (
    <PostInfoContainer>
      <ContentContainer>
        <nav>
          <button onClick={handleReturn}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </button>
          <a href={post.html_url}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </nav>
        <div>
          <h1>{post.title}</h1> 
          <span>
            <p>
              <FontAwesomeIcon icon={faGithub} />
              {data.login}
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatDistance(new Date(post.created_at), new Date(), { addSuffix: true, locale: ptBR })}
            </p>
            <p>
              <FontAwesomeIcon icon={faComment} />
              {post.comments} comentários
            </p>
          </span>
        </div>
      </ContentContainer>
    </PostInfoContainer>
  );
}
