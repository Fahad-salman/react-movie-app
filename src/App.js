import React ,{useEffect,useState}from 'react';
import {Container} from 'react-bootstrap';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
import CardList from './Component/CardList/CardList';
import axios from 'axios';

function App() {

  const apiKey = 'eccd4598b350512c8cc2c2fd27c3e88b'

  const [movies,setMovies] = useState([])
  const [page,setPage] = useState(0)

  // Get top moviee by axios 
  const getTopMovies= async()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    setMovies(res.data.results)
    setPage(res.data.total_pages)
  }
  // Get by current page
  const getPage= async(page)=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
    setMovies(res.data.results)
  }

  // Get Movies by search
  const getBySearch= async(search)=>{
    if(search === ''){
      getTopMovies()
    }else{
      const res =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=en-US&page=1&include_adult=false`)
    setMovies(res.data.results)
    setPage(res.data.total_pages)
    }
  }

  // get pupular movies
  const getPupularMovies= async()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query&language=en-US&page=1`)
    setMovies(res.data.results)
    setPage(res.data.total_pages)
  }

  // Get upComing Movies 
  const getUpComingMovies = async()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    setMovies(res.data.results)
    setPage(res.data.total_pages)
  }


  useEffect(()=>{
    getTopMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  

  return (
    <div className='background-color' >
    <NavBar getBySearch={getBySearch} 
     getPupularMovies={getPupularMovies} 
     getUpComingMovies={getUpComingMovies}
     getTopMovies={getTopMovies}
     />
    <Container>
    <CardList movies={movies} getPage={getPage} page={page} />
    </Container>
    
    <Footer/> 
    </div>
  );
}

export default App;
