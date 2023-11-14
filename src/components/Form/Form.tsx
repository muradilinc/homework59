import React from 'react';

interface Props {
  addMovie: () => void;
  changeName: () => void;
  nameMovie: string;
}

const Form: React.FC<Props> = ({addMovie, nameMovie, changeName}) => {
  return (
    <form onSubmit={addMovie}>
      <input type="text" value={nameMovie} onChange={changeName}/>
      <button type='submit'>Add movie</button>
    </form>
  );
};

export default Form;