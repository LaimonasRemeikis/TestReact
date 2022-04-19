import { ADD_1, ADD_11, ADD_KV, ADD_RAND, DIF_1, DIF_11, DIF_COLOR, DIF_RAND } from "../Constants";

function countReducer (state,action){
    switch(action.type){
        case ADD_1:
            return state + 1;
        case DIF_1:
            return state - 1;
        case ADD_11:
            return state + 11;
        case DIF_11:
            return state - 11;
            case ADD_RAND:
            return state + action.payload;
            case DIF_RAND:
            return state - action.payload;
            case DIF_COLOR:
            return state === 'red'?'blue': 'red';
            case ADD_KV:
            return state === state++;
        default:
           return state;
    }
    
}
export default countReducer