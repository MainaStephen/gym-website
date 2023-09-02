import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HOME from '../src/pages/Home/Home'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" Component={HOME} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/Gallery" Component={Gallery} />
      <Route exact path="/Contacts" Component={Contact} />
      {/* <Route exact path="/plans" Component={Plans} /> */}
      {/* <Route exact path="/Trainers" Component={Trainers} /> */}
      {/* <Route exact path="*" Component={NotFound} /> */}
      </Routes>  
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
