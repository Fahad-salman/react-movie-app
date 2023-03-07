import { TOPMOVIES,TOPMOVIES_URL,APIKEY } from "../types/moviesType"
import axios from "axios"

export const getTopMovie =()=>{
    return async(dispatch)=>{
        const res = await axios.get(TOPMOVIES_URL)
        dispatch({type:TOPMOVIES,data:res.data.results,pages:res.data.total_pages})
        console.log(res.data)
    }
}

export const getMovieBysearch =(search)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}&language=en-US&page=1&include_adult=false`)
        dispatch({type:TOPMOVIES, data:res.data.results, pages:res.data.total_pages})
    }
}

export const getPages =(page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=${page}`)
        dispatch({type:TOPMOVIES, data:res.data.results, pages:res.data.total_pages})
    }
}

export const getUpComingMovies =()=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`)
        dispatch({type:TOPMOVIES, data:res.data.results, pages:res.data.total_pages})
    }
}

export const getPupularMovies =()=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&query&language=en-US&page=1`)
        dispatch({type:TOPMOVIES, data:res.data.results, pages:res.data.total_pages})
    }
}