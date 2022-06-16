const amountReducer = (state=[],action) => {
    switch(action.type)
    {
        case ('add'): 
           { 
               return state.filter(word => word !== action.payload);
           }
        
        case ('remove'): 
            {
                return [...state,action.payload];
            }


        default : return state;
        break;
        
    }
}
export default amountReducer;