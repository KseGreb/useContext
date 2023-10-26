
import { useContext, useState } from 'react';
import './App.css';
import { Context } from './Context';

function ComponentTwo() {

    const [context, setContext] = useContext(Context);

  return (
    <div className="App">
        <p>Component  TWO</p>
        <p>{context}</p>
    </div>
  );
}

export default ComponentTwo;