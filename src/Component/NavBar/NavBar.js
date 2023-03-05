import React from 'react'
import { Row , Navbar, Container ,Form ,Nav} from 'react-bootstrap'

const NavBar = ({getBySearch,getPupularMovies,getUpComingMovies,getTopMovies}) => {

    const onSearch = (e) => {
        getBySearch(e)
    }

    const onClickPupularMovies=()=>{
      getPupularMovies()
    }

    const onClickUpComingMovies=()=>{
      getUpComingMovies()
    }

    const radomChosenMovies =()=>{
      Math.floor(Math.random() * [getTopMovies(),getPupularMovies(),getUpComingMovies()]);
    }

  return (
    <Row className='mb-5'>
       <Navbar bg="dark" expand="lg" variant='dark'className='px-2' >
      <Container >
        <Navbar.Brand onClick={()=>radomChosenMovies()} >Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav.Link className='m-2' style={{color:'white'}} onClick={()=>onClickPupularMovies()} >Popular</Nav.Link>
          <Nav.Link className='m-2' style={{color:'white'}} onClick={()=>onClickUpComingMovies()} >UpComing</Nav.Link>
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