import PromotionsList from './components/promotions/PromotionsList';
import Login from './login/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import  PromotionView from './components/promotions/PromotionView';

const App=()=> {
  return (
    <div className="App">
      <Login/>
      <Router>
        <Routes>
          <Route path="/" element={<PromotionsList />}/>
          <Route path="promotion/:id" element={<PromotionView />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
