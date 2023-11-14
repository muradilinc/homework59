import React from 'react';

interface Props {
  addMovie: (event: React.FormEvent) => void;
  changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nameMovie: string;
}

const Form: React.FC<Props> = ({addMovie, nameMovie, changeName}) => {
  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        value={nameMovie}
        onChange={changeName}
        required
      />
      <button type='submit'>Add movie</button>
    </form>
  );
};

export default Form;