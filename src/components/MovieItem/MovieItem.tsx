import React from 'react';
import {Trash} from '@phosphor-icons/react';
import {Movie} from '../../types';

interface Props {
  movie: Movie;
  renameMovie: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  deleteMovie: (id: string) => void;
}

const MovieItem: React.FC<Props> = ({movie, deleteMovie, renameMovie}) => {
  return (
    <div>
      <input
        type="text"
        value={movie.name}
        placeholder={movie.name}
        onChange={(event) => renameMovie(event, movie.id)}
      />
      <Trash size={32} onClick={() => deleteMovie(movie.id)} />
    </div>
  );
};

export default MovieItem;