import React,{useState,useEffect} from 'react'
import { Card, Button } from 'react-bootstrap';
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
    const name = moviee.original_title
    const overview = moviee.overview
    const rate = moviee.vote_average
    const date = moviee.release_date
    const imagePath = 'https://image.tmdb.org/t/p/original/'+moviee.poster_path
  return (
    <Card className="movie-card">
    <div className="movie-image-container">
      <img className="movie-image" src={imagePath} alt={name} />
      <div className="movie-rate">{rate}</div>
    </div>
    <Card.Body className="movie-details">
      <Card.Title>{name}</Card.Title>
      <Card.Text>{overview}</Card.Text>
      <Card.Text>Date: {date}</Card.Text>
      <Link to='/' >
      <Button variant="dark">Back Stap</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default MovieDetails