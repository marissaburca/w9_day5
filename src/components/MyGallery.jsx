import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_KEY = 'b207ab51';

function MyComponent() {
  const [Search1, setSearch1] = useState([]);
  const [Search2, setSearch2] = useState([]);
  const [Search3, setSearch3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  

  const getMovies = (searchIndex, updateState) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchIndex}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error while recovering movies');
        }
      })
      .then((data) => {
        updateState(
          data.Search.map((movie) => ({
            Title: movie.Title,
            Year: movie.Year,
            imdbID: movie.imdbID,
            Type: movie.Type,
            Poster: movie.Poster,
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error', error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getMovies('harry%20potter', setSearch1);
    getMovies('guardians', setSearch2);
    getMovies('barbie', setSearch3);
  }, []);

  return (
    <Container fluid className="px-4 text-white" data-bs-theme="dark" style={{ backgroundColor: '#221f1f' }}>
      <Row className="pt-3">
        <h4 className="ps-3 mt-4 mb-2">Tranding Now</h4>
      </Row>
      <Row className="main-row">
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
        {Search1.slice(0, 6).map((movie, index) => {
          return (
            <Col key={index} sx={12} sm={6} md={3} lg={2} xl={2} className="mb-1 px-1">
              <Card>
              <Link to={`/movie-details/${movie.imdbID}`}>
                <Card.Img variant="top" alt={movie.Title} src={movie.Poster} id="new" />
              </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-3">
        <h4 className="ps-3 mt-4 mb-2 pb-2">Watch it Again</h4>
      </Row>
      <Row className="main-row">
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
        {Search2.slice(0, 6).map((movie, index) => {
          return (
            <Col key={index} sx={12} sm={6} md={3} lg={2} xl={2} className="mb-1 px-1">
              <Card>
              <Link to={`/movie-details/${movie.imdbID}`}>
                <Card.Img variant="top" alt={movie.Title} src={movie.Poster} id="new" />
              </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-3">
        <h4 className="ps-3 mt-4 mb-2">New Releases</h4>
      </Row>
      <Row className="main-row">
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
        {Search3.slice(0, 6).map((movie, index) => {
          return (
            <Col key={index} sx={12} sm={6} md={3} lg={2} xl={2} className="mb-1 px-1">
              <Card>
              <Link to={`/movie-details/${movie.imdbID}`}>
                <Card.Img variant="top" alt={movie.Title} src={movie.Poster} id="new" />
              </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MyComponent;
