import PromotionsList from './components/promotions/PromotionsList';
import Login from './login/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import  PromotionView from './components/promotions/PromotionView';
import LogOutButton from './components/promotions/LogOut/LogOutButton';

 
const App=()=> {
 
  const isLoggedIn=()=>{
    let token = localStorage.getItem('token')
    const result = token === null || token === undefined || token === ''
    return  !result
  }


  return (
    <div className="App">
      <div className="header">
        <h1>El espacio de promociones</h1>
        { isLoggedIn() &&
          <LogOutButton/>
        }
      </div>

      <Router>
        <Routes>
          <Route path="/" element={ isLoggedIn()? <PromotionsList /> : <Login/> }/>
          <Route path="promotion/:id" element={isLoggedIn()?<PromotionView /> : <Login/>  }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

