
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Splash from './components/Splash';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" component={Splash} exact />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
