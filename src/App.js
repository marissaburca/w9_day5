import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyGallery from './components/MyGallery';
import UnderNav from './components/UnderNav';

function App() {
  
  return (
    <>
    <MyNavbar/>
    <UnderNav/>
    <MyGallery/>
    <MyFooter/>

  </>

  );
}

export default App;
