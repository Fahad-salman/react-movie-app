import { TOPMOVIES } from '../types/moviesType';

const initialValue = {movies:[],pageCount:0}
export const moviesReducer = (state = initialValue, action) => {
    switch(action.type){
        case TOPMOVIES:
            return{movies : action.data,pageCount:action.pages}
            default:
                return state; 
    }
}

// dispatch({type:TOPMOVIES,data:[]})