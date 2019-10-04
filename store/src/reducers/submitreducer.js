import {submit_new_product,submit_new_page,submit_new_request,submit_new_activsubepage,submit_new_activepage} from '../actions/types';
import reduxJSON from "./StateJSONTree"

const initialState =reduxJSON;

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case submit_new_product:
        return { ...state, ...payload }

        case submit_new_page:
        return { ...state, ...payload }

        case submit_new_request:
        return { ...state, ...payload }

        case submit_new_activepage:
            

           
           return {...state,
             pages:{...state.pages,
               control:{...state.pages.control,
                activePageToControl:payload}}}

        


          
          case submit_new_activsubepage:
            console.log (state.pages.control.activePageToControl+"sub page reducer is here");  
 
              return {...state,
                pages:{...state.pages,
                  control:{...state.pages.control,
                    activeSubpageToControl:payload}}}



    default:
        return state;
    }
}
