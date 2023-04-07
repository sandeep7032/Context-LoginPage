import './App.css';
import Context from './components/Context';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import { useContext, useState } from 'react';

function App() {
  useContext(Context)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  return (
    <div className="App" >
      <Context.Provider value={{ login, setLogin, user, setUser }}>
        {login ? (<div>
          <Nav />
          <Home />
        </div>) : (<Login />)}
      </Context.Provider>
    </div >
  );
}

export default App;
