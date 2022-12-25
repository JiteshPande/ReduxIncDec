 import './App.css';
 import { useSelector, useDispatch } from 'react-redux';
 import { Decrement,EvenIncrement,Increment,OddIncrement } from './action/Index';
 import {Routes,Route, Link} from 'react-router-dom';
import View from './View/View';


function App() {
  const myState = useSelector((state)=>
    state.changeNumber
  );
  const dispatch = useDispatch();
  return (
    <div className="App Card ">
      <h1>App Component</h1>
      <h2>Increment and Decrement</h2>
      <div>
        <button className='quantity_minus' title='Decrement'  onClick={()=>dispatch(Decrement())}><span>Subtract -2</span></button>
        <input name='quantity'type='text'  className='quantity_input' value={myState}  />
        <button className='quantity_plus' title='Increment' onClick={()=>dispatch(Increment())}><span>ADD +5</span></button>
        <button className='Odd' title='OddIncrement' onClick={()=>{dispatch(OddIncrement());console.log(myState)}}> IF odd +2</button>
        <button className='even' title='OddIncrement' onClick={()=>{dispatch(EvenIncrement());console.log(myState)}} >IF Even +2</button>
      </div>
    </div>
  );
}

export default App;
