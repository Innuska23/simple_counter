import { useState } from 'react';
import './App.css';

import { Button } from './components/button/Button';
import { Board } from './components/board/Board';

function App() {
  const initialValue = 0;
  const maxValue = 5;

  const [counter, setCounter] = useState<number>(initialValue);

  const incHandler = () => {
    if (counter < maxValue) {
      setCounter(prevCount => prevCount + 1);
    }
  };

  const decrHandler = () => setCounter(initialValue);

  return (
    <div className="App">

      <Board counter={counter} maxValue={maxValue} />

      <div className='ButtonContainer'>
        <Button onClick={incHandler} disabled={counter === maxValue}>Inc</Button>
        <Button onClick={decrHandler} disabled={counter === initialValue}>Decr</Button>
      </div>

    </div>
  );
}

export default App;