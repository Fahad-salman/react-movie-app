import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {
    const apiKey ='eccd4598b350512c8cc2c2fd27c3e88b'
    const pramId = useParams()
    const [moviee,setMoviee] = useState([])

    const getMovieDetails=async()=>{
        const res =await axios.get(`https://api.themoviedb.org/3/movie/${pramId.id}?api_key=${apiKey}&language=en-US`)
        setMoviee(res.data)
    }
    useEffect(()=>{
        getMovieDetails(moviee)
        console.log(moviee.original_title+'<')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>
    MovieDetails <br/>
    imagePath : {moviee.poster_path}<br/>
    name : {moviee.original_title}<br/>
    Date : {moviee.release_date}<br/>
    Rate : {moviee.vote_average} <br/>
    OverView : {moviee.overview}<br/> 
    <Link to='/' >
    <Button variant='dark' >
        Back
    </Button>
    </Link>
    </div>
  )
}

export default MovieDetails