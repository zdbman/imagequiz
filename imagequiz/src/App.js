
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />}>

        </Route>
        <Route exact path='/register' element={<Register />}>

        </Route>
        <Route exact path='/login' element={<Login />}>
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
