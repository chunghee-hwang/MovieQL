import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import SuggestedMovie from '../components/SuggestedMovie';
const GET_MOVIE = gql`
  # apollo가 타입 검증하게하기 위한 코드
  query getMovie($id: Int!) {
    # 여기부턴 서버로 전송될 코드
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_intro
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Suggestions = styled.h2`
  color: #000;
  font-weight: bold;
  margin-top: 20px;
`;

const SuggestedMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  height: 50px;
  margin-top: 10px;
`;

export const Detail = () => {
  let { id } = useParams();
  id = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  return (
    <>
      <Container>
        <Column>
          <Title>
            {loading
              ? 'loading...'
              : `${data.movie.title} ${data.movie.isLiked ? '😍' : '💔'}`}
          </Title>
          <Subtitle>
            {data?.movie?.language} · {data?.movie?.rating}
          </Subtitle>
          <Description>{data?.movie?.description_intro}</Description>
          <Suggestions>Suggestions</Suggestions>
          <SuggestedMovies>
            {data?.suggestions?.map((s) => (
              <SuggestedMovie
                key={s.id}
                id={s.id}
                bg={s.medium_cover_image}
              ></SuggestedMovie>
            ))}
          </SuggestedMovies>
        </Column>
        <Poster
          // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
          bg={data?.movie?.medium_cover_image}
        ></Poster>
      </Container>
    </>
  );
};
export default Detail;
