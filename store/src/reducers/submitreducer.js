import {submit_new_product,submit_new_page,submit_new_request,submit_new_activsubepage,submit_new_activepage,submit_new_page_config} from '../actions/types';
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
              return {...state,
                pages:{...state.pages,
                  control:{...state.pages.control,
                    activeSubpageToControl:payload}}}


          case submit_new_page_config:
              // console.log(payload.page)
              // console.log(payload.data)

          switch (payload.page) {
            case "contact":
                return {...state,
                  pages:{...state.pages,
                    contact:{...state.pages.contact,
                      ...payload.data}}}
              break;
            case "about":
                  return {...state,
                    pages:{...state.pages,
                      about:{...state.pages.about,
                        ...payload.data}}}
                break;
            case "reserve":
                  return {...state,
                    pages:{...state.pages,
                      reserve:{...state.pages.reserve,
                        ...payload.data}}}
                break;
            
                case "header":
                  return {...state,
                    Header:{...state.Header,...payload.data}}
                break;

                case "cart":
                  return {...state,
                    pages:{...state.pages,
                      cart:{...state.pages.cart,
                        ...payload.data}}}
                break;
                case "products":
                  return {...state,
                    pages:{...state.pages,
                      products:{...state.pages.products,
                        ...payload.data}}}
                break;
                case "services":
                    return {...state,
                      pages:{...state.pages,
                        services:{...state.pages.services,
                          ...payload.data}}}
                  break;
            
          
            default:
              break;
          }
              



    default:
        return state;
    }
}
