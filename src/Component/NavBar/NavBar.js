import React,{useState} from 'react'
import { Row , Navbar, Container ,Form ,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTopMovie,getMovieBysearch,getUpComingMovies,getPupularMovies } from '../../redux/actions/movieAction'

const NavBar = () => {

  const dispatch = useDispatch()

    const onSearch = (e) => {
        getBySearch(e)
    }

    // Get Movies by search
  const getBySearch = async (search) => {
    if (search === '') {
      dispatch(getTopMovie())
    } else {
      dispatch(getMovieBysearch(search))
    }
  }

    const onClickPupularMovies=()=>{
      dispatch(getPupularMovies())
    }
    
    const onClickTopMovies=()=>{
      dispatch(getTopMovie())
    }

    // Get upComing Movies 
    const onClickUpComingMovies=()=>{
      dispatch(getUpComingMovies())
    }

    // const radomChosenMovies =()=>{
    //   Math.floor(Math.random() * [getTopMovies(),getPupularMovies(),getUpComingMovies()]);
    // }




  return (
    <Row className='mb-5'>
       <Navbar bg="dark" expand="lg" variant='dark'className='px-2' >
      <Container >
    <Link to='/'>
        <Navbar.Brand >Movie App</Navbar.Brand>
    </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav.Link className='mx-3' style={{color:'white' , cursor:'pointer'}} onClick={()=>onClickPupularMovies()}>Popular</Nav.Link>
          <Nav.Link className='mx-3' style={{color:'white' , cursor:'pointer'}} onClick={()=>onClickTopMovies()}>Top</Nav.Link>
          <Nav.Link className='mx-3' style={{color:'white' , cursor:'pointer'}} onClick={()=>onClickUpComingMovies()} >UpComing</Nav.Link>
          <Form className="d-flex">
            <Form.Control
            style={{width: '310px'}}
            onChange={(e)=>onSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className=""
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar