
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  
  Route,

} from "react-router-dom";
import AddBooks from './pages/AddBooks';
import UpdateBooks from './pages/UpdateBooks';
import DeleteBooks from './pages/DeleteBooks';
import Books from './pages/Books';
import ViewBooks from './pages/ViewBooks';
import Footer from './component/Footer';
import Login from './pages/Login';
import BooksSection2 from './component/BooksSection2';



function App() {


  return (
    <Router>
    <Navbar/>
        <Routes>
            <Route exact path="/" element={<Login/>}/>

          

            <Route exact path="/home" element={<Home/>}/>

            

            <Route  path="/mybooks" element={<Books/>}/>
            
            

            <Route  path="/addBooks" element={<AddBooks/>}/>

            {/*<Route  path="/updates" element={<BooksSection2/>}/>*/}

      


            
            
          
            
            

             
        </Routes>
        <Footer/>
    </Router>
   
  );
}

export default App;

