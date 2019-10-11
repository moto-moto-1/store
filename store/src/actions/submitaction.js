import axios from 'axios';
import {submit_new_product,submit_new_page,submit_new_request,submit_new_activsubepage,submit_new_activepage,submit_new_page_config} from '../actions/types';




export const changecontrolpage = (type,data) => dispatch => {
    
   if(type=="submit_new_activepage")
           { dispatch(
                            {
                                type: submit_new_activepage,
                                payload: data
                            }
                          
    );}
    else if(type=="submit_new_activsubepage")
          {  dispatch(
                            {
                                type: submit_new_activsubepage,
                                payload: data
                            }
                          
    );}
    
    
    
    
    };

    export const changePageConfiguration = (pageToChange,dataToChange) => dispatch => {
        console.log("Action fired")

        console.log(pageToChange)
        console.log(dataToChange)

                { dispatch(
                                 {
                                     type: submit_new_page_config,
                                     payload: {page:pageToChange,data:dataToChange}
                                 }
                               
         );}
         };


    








// export const fetchcontacts = () => dispatch => {
    
// axios.get(`https://twinlist.com/personal/data`,
// {
//     headers: {'Content-Type': 'application/json'},
//     params: {
//         data_needed: 'contacts',
//         id:'none',
//         team: 'none'

//     }
// }

// ).then(function (response) {
//         dispatch(
//                         {
//                             type: get_contacts,
//                             payload: response.data
//                         }
                    
// );});




// };

// export const fetchtasks = () => dispatch => {

//     axios.get(`https://twinlist.com/personal/data`,
// {
//     headers: {'Content-Type': 'application/json'}
// }

// ).then(function (response) {
//         dispatch(
//                         {
//                             type: get_tasks,
//                             payload: response.data
//                         }
                    
// );});


// };

// export const fetchsupplies = () => dispatch => {

//     axios.get(`https://twinlist.com/personal/data`,
// {
//     headers: {'Content-Type': 'application/json'}
// }

// ).then(function (response) {
//         dispatch(
//                         {
//                             type: get_supplies,
//                             payload: response.data
//                         }
                    
// );});


// };

// export const fetchteams = () => dispatch => {

//     axios.get(`https://twinlist.com/personal/data`,
// {
//     headers: {'Content-Type': 'application/json'}
// }

// ).then(function (response) {
//         dispatch(
//                         {
//                             type: get_teams,
//                             payload: response.data
//                         }
                    
// );});


// };

// export const fetchalldata = (id,team) => dispatch => {

//     axios.get(`https://twinlist.com/personal/data`,
// {
//     headers: {'Content-Type': 'application/json'},
//     params: {
//         data_needed: 'all',
//         id: id,
//         team: team

//     }
// }

// ).then(function (response) {
//         dispatch(
//                         {
//                             type: get_all_data,
//                             payload: response.data
//                         }
                    
// );});


// };








// fetch('https://twinlist.com/personal/data').then(res => res.json())
//     .then(users =>
//         dispatch(
//             {
//                 type: get_contacts,
//                 payload: users
//             }
//         )


//     )


