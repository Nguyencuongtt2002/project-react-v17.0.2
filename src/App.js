import logo from './logo.svg';
//import './App.css';
import Home from './component/LoaiSanPham/home';
import ThuongHieu from './component/ThuongHieu/thuonghieu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LienHe from './component/LienHe/lienhe';
function App() {
  return (
    <Router>
      <div className="app">
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/thuonghieu" component={ThuongHieu} />
            <Route path="/lienhe" component={LienHe} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
