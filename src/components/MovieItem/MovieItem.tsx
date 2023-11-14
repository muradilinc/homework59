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
    <>
      <h4 className="mt-4 text-2xl">To watch list:</h4>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <input
          type="text"
          value={movie.name}
          placeholder={movie.name}
          className="col-span-2 border border-black p-2"
          onChange={(event) => renameMovie(event, movie.id)}
        />
        <button className="flex justify-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <Trash size={28} onClick={() => deleteMovie(movie.id)} />
        </button>
      </div>
    </>

  );
};

export default MovieItem;