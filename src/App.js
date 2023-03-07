import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
import CardList from './Component/CardList/CardList';
import MovieDetails from './Component/MovieDetails/MovieDetails';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  
  // get pupular movies
  // const getPupularMovies = async () => {
  //   const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query&language=en-US&page=1`)
  //   // setMovies(res.data.results)
  //   setPage(res.data.total_pages)
  // }

  return (
    <div className='background-color' >
      <NavBar 
      />

      <Container>
          <Routes>
          <Route path='/' element={<CardList/>} />
            <Route path='/movieDetails/:id' element={<MovieDetails/>} />
            
          </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
