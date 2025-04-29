
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Privatecomp from './components/Privatecomp';
import Login from './components/Login';
import AddProducts from './components/AddProducts';
import Productlist from './components/Productlist';
import UpdateProducts from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>
      
        <Route element={<Privatecomp />}>
        <Route path='/'element={<Productlist/>} />
        <Route path='/add'element={<AddProducts />} />
        <Route path='/update/:id'element={<UpdateProducts />} />
        <Route path='/logout'element={<h1>Logout Component</h1>} />
        <Route path='/profile'element={<h1>Profile Component</h1>} />
        </Route>

        <Route path='/signup'element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
