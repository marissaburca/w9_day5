import { useParams } from 'react-router-dom';
import {Row, Col, Spinner, Alert} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

  

const API_KEY = 'b207ab51';

const MovieDetails = () => {
    const { id } = useParams(); 
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    const getDetails = ()=>{
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Error while recovering movies');
            }
          })
          .then((data) => {
            console.log(data)
            setMovieData(data)
            setIsLoading(false);
          })
          .catch((error) => {
            console.log('Error', error);
            setIsLoading(false);
            setIsError(true);
          });
    }
    useEffect(()=>{
        getDetails()
    },[]);

    return ( 
    <Row>
      <Col>
      <Row>
        {isLoading && (
          <div className="text-center my-2">
            <Spinner animation="border" variant="info" />
          </div>
        )}
        {isError && (
          <div className="text-center my-2">
            <Alert variant="danger">It seems that an error has occurred</Alert>
          </div>
        )}
        </Row>
        { movieData && (
        <Row className='text-center'>
        <h1 className='text-center py-3'>Movie Details</h1>
        <Card className='border-0'>
        <Card.Img className='w-50 mx-auto' variant="top" src={movieData.Poster} />
        <Card.Body>
        <Card.Title>{movieData.Title}</Card.Title>
        <Card.Text>
          Released on {movieData.Released} <br/>
          Runetime  {movieData.Runtime}
        </Card.Text>
        
      </Card.Body>
        </Card>
         </Row> )}
         </Col>
       </Row> 
   
     );
}
 
export default MovieDetails;