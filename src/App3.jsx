import { useReducer } from 'react';
import { addKv, dellKv } from './Actions/basic';
import './App.css';
import kvadratelis from './Reducers/kvadratelis'

function App() {

    const [Kvadr, dispachKvadr] = useReducer(kvadratelis, []);



    console.log(Kvadr)

  return (
    <div className="App">
        <h1>ReduCeriS</h1>
        <div className='kv'>
            {
                Kvadr.map((k,i) => <div key={i} className='square'></div>)
            }
        </div>
         <button onClick={()=> dispachKvadr(addKv())}>addSqare</button>
         <button onClick={()=>dispachKvadr(dellKv())}>delete</button>
    </div>
  );
}

export default App;