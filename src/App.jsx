import './App.css';

import { BrowserRouter, Switch, Route} from "react-router-dom";
import AddWords from './pages/AddWords/AddWords'
import DisplayCards from './pages/DisplayCards/DisplayCards'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Switch>
              <Route exact path="/">
                <DisplayCards />
              </Route>

              <Route path="/nueva-palabra">
                <AddWords />
              </Route>

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
