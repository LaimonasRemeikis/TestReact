import { ADD_KV, DELL } from "../Constants";

function kvadratelis (state,action){

     switch(action.type){
         case ADD_KV:
             return [...state, 1];
             case DELL:
                 return state.filter((e,i)=> i!== 0);
             default:
                 return state;
     }
}

export default kvadratelis;