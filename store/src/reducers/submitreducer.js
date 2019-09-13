import {submit_new_task,submit_new_team,submit_new_supply} from '../actions/types';

const initialState = {

    tasks:[],
    supplies:[],
    teams:[],
    contacts:[]

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case submit_new_task:
        return { ...state, ...payload }

        case submit_new_team:
        return { ...state, ...payload }

        case submit_new_supply:
        return { ...state, ...payload }

    default:
        return state;
    }
}
