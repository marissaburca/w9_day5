import { Component } from "react";
import { Container, Row, Col, Spinner, Alert} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

class MyGallery extends Component{
 state={
    Search1:[],
    Search2:[],
    Search3:[],

    isLoading: true,
    isError:false,
 }

 getMovies= (searchIndex,StateName )=>{
    fetch(`http://www.omdbapi.com/?apikey=b207ab51&s=${searchIndex}`)
    .then(res=>{
        if(res.ok){
            return res.json()
        }else{
            throw new Error('Error while recovering movies')
        }
    })
    .then((data)=>{
        console.log(data)
        this.setState({
            [StateName]: data.Search.map((movie) => ({
              Title: movie.Title,
              Year: movie.Year,
              imdbID: movie.imdbID,
              Type: movie.Type,
              Poster: movie.Poster,
            })),
            isLoading: false,
    })
})
    .catch(error=>{
        console.log('Error', error)
        this.setState({
            isLoading: false,
            isError: true,
        })
    })
}
 componentDidMount(){
    this.getMovies('harry%20potter','Search1')
    this.getMovies('star%20wars','Search2')
    this.getMovies('superman','Search3')
    
 }
 render(){
    console.log('SONO RENDER')
    return(
        <Container fluid className="px-4 text-white"  data-bs-theme="dark" style={{ backgroundColor : '#221f1f'}}>
        <Row className='pt-3' >
            <h4 className='ps-3 mt-4 mb-2'>Tranding Now</h4>
        </Row>
        <Row className='main-row'>
            {this.state.isLoading && (
                <div className="text-center my-2">
                    <Spinner animation='border' variant='info'/>
                </div>
            )}
            {this.state.isError && (
                <div className="text-center my-2">
                    <Alert variant='danger'>It seems that an error has occurred</Alert>
                </div>
            )}
            { this.state.Search1.slice(0,6).map((movie, index)=>{
                return (
            <Col key={index} sx={12} sm={6} md={3} lg={2} xl={2} className='mb-3'>
            <Card>
            <Card.Img variant="top" alt={movie.Title} src={movie.Poster} id='new'/>
            </Card>
            </Col>)
 })
           }
        </Row>
        <Row className='mt-3' >
            <h4 className='ps-3 mt-4 mb-2'>Watch it Again</h4>
        </Row>
        <Row className='main-row'>
            {this.state.isLoading && (
                <div className="text-center my-2">
                    <Spinner animation='border' variant='info'/>
                </div>
            )}
            {this.state.isError && (
                <div className="text-center my-2">
                    <Alert variant='danger'>It seems that an error has occurred</Alert>
                </div>
            )}
            { this.state.Search2.slice(0,6).map((movie, index)=>{
                return (
            <Col key={index} sx={12} sm={6} md={3} lg={2} xl={2} className='mb-3'>
            <Card>
            <Card.Img variant="top" alt={movie.Title} src={movie.Poster} id='new'/>
            </Card>
            </Col>)
 })
           }
        </Row>
        <Row className='mt-3' >
            <h4 className='ps-3 mt-4 mb-2'>New Releases</h4>
        </Row>
        <Row className='main-row'>
            {this.state.isLoading && (
                <div className="text-center my-2">
                    <Spinner animation='border' variant='info'/>
                </div>
            )}
            {this.state.isError && (
                <div className="text-center my-2">
                    <Alert variant='danger'>It seems that an error has occurred</Alert>
                </div>
            )}
            { this.state.Search3.slice(0,6).map((movie, index)=>{
                return (
            <Col key={index} sx={12} sm={6} md={3} lg={2} xl={2} >
            <Card>
            <Card.Img variant="top" alt={movie.Title} src={movie.Poster} id='new'/>
            </Card>
            </Col>)
 })
           }
        </Row>
        </Container>
    )
 }
}

export default MyGallery