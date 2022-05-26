export function reducer(state, action) {


    switch(action.type) {
        case "revenu":
            return {
                ...state,
                revenu: [...state.revenu, action.transaction]
            } 
        
        case "depense":
            return  {
                ...state,
                depense: [...state.depense, action.transaction]
            }

        default:
            return state;
    }

}