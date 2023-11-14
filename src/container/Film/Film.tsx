import React from 'react';
import {useEffect, useState} from 'react';
import {Movie} from '../../types';
import Form from '../../components/Form/Form';
import MemoMovieItem from '../../components/MovieItem/MemoMovieItem';

const Film = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [nameMovie, setNameMovie] = useState('');


  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameMovie(event.target.value);
  };

  const addMovie = async (event: React.FormEvent) => {
    event.preventDefault();

    setMovies(prevState => {
      const newMovie: Movie = {
        id: Math.random().toString(),
        name: nameMovie,
      };

      localStorage.setItem('movies', JSON.stringify([...prevState, newMovie]));

      return [...prevState, newMovie];
    });
    setNameMovie('');
  };

  const deleteMovie = (id: string) => {
    setMovies(prevState => {
      const filteredMovie = prevState.filter(movie => movie.id !== id);

      localStorage.setItem('movies', JSON.stringify(filteredMovie));
      return filteredMovie;
    });
  };

  const renameMovie = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setMovies(prevState => {
      const updateMovies = prevState.map((movie) =>{
        if (movie.id === id){
          return {
            ...movie,
            name: event.target.value
          };
        }
        return movie;
      });

      localStorage.setItem('movies', JSON.stringify(updateMovies));
      return updateMovies;
    });
  };


  useEffect(() =>{
    if (localStorage.getItem('movies')){
      setMovies(JSON.parse(localStorage.getItem('movies') || ''));
    }
  }, []);


  return (
    <div className="container mx-auto my-3.5">
      <Form
        nameMovie={nameMovie}
        changeName={changeName}
        addMovie={addMovie}
      />
      <h4 className="mt-4 text-2xl">To watch list:</h4>
      {
        movies.map((movie) => (
            <MemoMovieItem
              key={movie.id}
              movie={movie}
              renameMovie={renameMovie}
              deleteMovie={() => deleteMovie(movie.id)}
            />
        ))
      }
    </div>
  );
};

export default Film;