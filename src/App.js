import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import {COUNTRUP,COUNTRDOWN,COUNTRCLEAR,COUNTRMULTI} from './store/actions/counter.action'
import {appReducer} from './store/reducers/counter.reducer'




let initalState = 0
function App() {
  const [myState,dispatch] = useReducer(appReducer,initalState)
  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={()=>dispatch(COUNTRUP)}> up</button>
      <button onClick={()=>dispatch(COUNTRDOWN)}> down</button>
      <button onClick={()=>dispatch(COUNTRMULTI)}> multi</button>
      <button onClick={()=>dispatch(COUNTRCLEAR)}> clear</button>

    </div>
  );
}

export default App;