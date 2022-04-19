import { useEffect, useReducer, useState } from 'react';
import { add1, add11, addRand, dif1, dif11, difColor, difRand } from './Actions/basic';
import './App.css';
import rand from './Common/rand';
import countReducer from './Reducers/countReducer';

    

function App() {

    const [countR, dispachR] = useReducer(countReducer, 333);
    const [random, setRandom] = useState(100);
    const [color, dispachColor] = useReducer(countReducer, 'red');

    useEffect(() => {
        setRandom(rand(10,89));
    }, [])

    const getNewRandom = (a) => {
        if('+' ===a){
            dispachR(addRand(random))
        }else{
            dispachR(difRand(random))
        }
        dispachR(addRand(random))
        setRandom(rand(10,80))
    }


  return (
    <div className="App">
        <h1>Use ReduCer</h1>
        <h2>Count Reducer Now: {countR}</h2>
        <h3 style={{background:color}}>{color}</h3>
        <div className='buttons'>
        <button onClick={() => dispachR(add1())}>+1</button>
        <button onClick={() => dispachR(dif1())}>-1</button>
        <button onClick={() => dispachR(add11())}>+11</button>
        <button onClick={() => dispachR(dif11())}>-11</button>
        <button onClick={() => dispachR(addRand(random))}>+{random}</button>
        <button onClick={() => dispachR(difRand(random))}>-{random}</button>
        <button onClick={() => getNewRandom('+')}>+RAND</button>
        <button onClick={() => getNewRandom('-')}>-RAND</button>
        <button onClick={()=> dispachColor(difColor())}>change</button>
        </div>
    </div>
  );
}

export default App;