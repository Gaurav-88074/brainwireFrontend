import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Body from './main/Body';
import HomePage from './components/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Application from './Application';
function App() {
  return (
    <Routes>
          <Route path="/"  element ={ <HomePage/>}/>      
          <Route path="/User*"  element ={<Application/>}/>      
          <Route path="/Signup"  element ={ <Signup/>}/>      
          <Route path="/Login"  element ={ <Login/>}/>      
    </Routes>
   
    // <div className='application'>
    //   <Header/>
    //   <Body/>
    // </div>
  );
}

export default App;
