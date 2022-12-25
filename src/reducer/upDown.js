const initialstate=0;

const changeNumber = (state = initialstate,action) => {
      switch(action.type)
      {
        case "INCREMENT": return state+5;
        case "DECREMENT": return state-2;
      
        case 'ODDINCREMENT':          
         if (state%2!==0)
       {
          return state + 2;
        };
        break;
        case 'EVENINCREMENT':
          if(state%2===0)
          {
            return state+2;
          }
          break;
                              
         
        default: return state;
      }
}
export default changeNumber;