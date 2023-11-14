import React from 'react';

interface Props {
  fetchJokes: () => void;
}

const MemoedButton: React.FC<Props> = React.memo(function Button({fetchJokes})  {
  console.log('render');
  return (
    <button className="text-white text-xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => fetchJokes()}>new joke</button>
  );
}, (prevProps, nextProps) => {
  return prevProps.fetchJokes !== nextProps.fetchJokes;
});

export default MemoedButton;