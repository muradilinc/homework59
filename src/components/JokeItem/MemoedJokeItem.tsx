import React from 'react';
import {Joke} from '../../types';

interface Props {
  joke: Joke;
}

const MemoedJokeItem: React.FC<Props> = React.memo( function JokeItem({joke}) {
  return (
    <>
      <p className="text-2xl mb-3">{joke.value}</p>
    </>
  );
});

export default MemoedJokeItem;