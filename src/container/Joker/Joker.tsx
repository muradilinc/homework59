import {useEffect, useState} from 'react';
import {BASE_URL} from '../../constants/constanst';
import {Joke} from '../../types';
import MemoedJokeItem from '../../components/JokeItem/MemoedJokeItem';
import MemoedButton from '../../UI/Button/MemoedButton';

const Joker = () => {
  const [joke, setJoke] = useState<Joke>();
  const [jokes, setJokes] = useState<Joke[]>([]);

  const fetchJoke = async () => {
    try {
      const response = await fetch(BASE_URL);
      const jokes = await response.json();
      setJoke(jokes);
    } catch (e) {
      alert('Error ' + e);
    }
  };

  const request = async () => {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        promises.push(data);
      } catch (e) {
        alert('Error ' + e);
      }
    }
    return Promise.all(promises);
  };

  const fetchJokes = async () =>{
    try {
      const jokes = await request();
      setJokes(jokes);
    } catch (e) {
      alert('Error ' + e);
    }
  };

  useEffect(() => {
    void fetchJoke();
    void fetchJokes();
  }, []);

  if (!jokes && !joke) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center">
      <h1>JOKER</h1>
      {
        jokes.map((joke, index) => <MemoedJokeItem key={index} joke={joke}/>)
      }
      <MemoedButton fetchJokes={fetchJokes}/>
    </div>
  );
};

export default Joker;