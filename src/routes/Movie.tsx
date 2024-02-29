import { gql, useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  const onClickLikeButton = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : `${data.movie?.title}`}</Title>
        <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
        <button onClick={onClickLikeButton}>
          {data?.movie?.isLiked ? "Unlike" : "Like"}
        </button>
      </Column>
      <Image backgroundImage={data?.movie?.medium_cover_image} />
    </Container>
  );
}

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

export const backgroundImage = (props: { backgroundImage: string }) =>
  css`
    background-image: url(${props.backgroundImage});
  `;

const Image = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
  ${backgroundImage}
`;
