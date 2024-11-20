import './App.css';

import { Button } from './components/button/Button';
import { Board } from './components/board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './bll/store';
import { decCounterValueAC, incCounterValueAC } from './bll/counter-reduce';


function App() {

  const initialValue = useSelector<AppStateType, number>(state => state.counter.value)
  const maxValue = 5;

  const dispatch = useDispatch()

  const incHandler = () => {
    if (initialValue < maxValue) {
      dispatch(incCounterValueAC())
    }
  };

  const decrHandler = () => {
    dispatch(decCounterValueAC())
  }

  return (
    <div className="App">

      <Board counter={initialValue} maxValue={maxValue} />

      <div className='ButtonContainer'>
        <Button onClick={incHandler} disabled={initialValue === maxValue}>Inc</Button>
        <Button onClick={decrHandler} disabled={initialValue === 0}>Decr</Button>
      </div>

    </div>
  );
}

export default App;