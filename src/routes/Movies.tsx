import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState<MoviesTypeProps>([]);
  const client = useApolloClient();

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
              id
            }
          }
        `,
      })
      .then((results) => setMovies(results.data.allMovies));
  }, [client]);

  console.log(movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

type MoviesTypeProps = Array<MovieTypeProps>;

type MovieTypeProps = {
  id: number;
  title: string;
  __typename: string;
};
