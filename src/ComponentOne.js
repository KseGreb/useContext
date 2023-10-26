
import { useContext } from 'react';
import './App.css';
import { Context } from './Context';


function ComponentOne() {

    const [context, setContext] = useContext(Context);

  return (
    <div className="App">
        <p>Component One</p>
        <button onClick={()=> setContext("New message!!!")}>Press to change</button>
    </div>
  );
}

export default ComponentOne;