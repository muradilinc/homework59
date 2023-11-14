import React from 'react';

interface Props {
  addMovie: (event: React.FormEvent) => void;
  changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nameMovie: string;
}

const Form: React.FC<Props> = ({addMovie, nameMovie, changeName}) => {
  return (
    <form onSubmit={addMovie} className="grid grid-cols-3 gap-2">
      <input
        type="text"
        value={nameMovie}
        onChange={changeName}
        className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <button
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type='submit'
      >Add movie</button>
    </form>
  );
};

export default Form;