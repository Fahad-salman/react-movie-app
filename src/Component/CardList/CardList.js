import React,{useEffect,useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PaginationHolder from '../Pagination/PaginationHolder';
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { getTopMovie } from '../../redux/actions/movieAction';

const CardList = () => {

const [movies, setMovies] = useState([])
const [page, setPage] = useState(0)
  
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopMovie())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dataMovies = useSelector((state)=>state.movies)
  
  useEffect(()=>{
    setMovies(dataMovies)
    },[dataMovies])

   
    return (
        
        <Row className="g-4 justify-content-center">

            {movies.length >= 1 ? (movies.map((mov) => {
                const id = mov.id;
                const movieName = mov.original_title
                const imagePath = mov.poster_path;
                const overview = mov.overview;
                const date = mov.release_date;
                return (
                   <Col  className='col-12 col-sm-6' >
                   <Card key={id}>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original/' + imagePath} />
                        <Card.Body className='d-flex justify-content-between flex-column'>
                            <Card.Title className='fw-bolder'>{movieName}</Card.Title>
                            <Card.Text className='desc' >
                                {date}
                            </Card.Text>
                          
                            <Card.Text className='desc' >
                                {overview}
                            </Card.Text><Link to={`/movieDetails/${id}`} >
                            <Button variant="dark"  >See the movie</Button> </Link>
                        </Card.Body>
                    </Card>
                   </Col>
                )
            })) : <Col>
                <h2 className='text-center' >no data found</h2>
            </Col>}
            {movies.length >= 1? (<PaginationHolder
            //  getPage={getPage} 
             page={page} />):null}
            
        </Row>
       
    )
}

export default CardList


//  src={'https://image.tmdb.org/t/p/original/'+imagePath}