import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyGallery from './components/MyGallery';
import UnderNav from './components/UnderNav';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
  <BrowserRouter>
    <MyNavbar/>
    <UnderNav/>
    <Routes>
    <Route element={<MyGallery/>} path="/"/>
    <Route path="/movie-details/:id" element={<MovieDetails/>} />
    </Routes>
    <MyFooter/>
  </BrowserRouter>
  </>
  );
}

export default App;
