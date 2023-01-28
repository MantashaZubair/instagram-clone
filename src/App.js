import './App.css';
import Login from './pages/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin';
import NavBar from './component/NavBar';
import PostOverview from './pages/PostOverview';
import Profile from './pages/Profile';
function App() {
  return (
    <div className='app-bg'>
    <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
        <Route exact path='/post' element={<PostOverview/>}/>
        <Route exact path='/myprofile' element={<Profile/>}/>
       </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
