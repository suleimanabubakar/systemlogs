import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import SearchBar from "./components/layout/SearchBar"
import AddLogModal from './components/logs/AddLogModalEg';
import Log from './components/logs/Logs';


function App() {

  useEffect(()=> {
    // initialize materailize js
    M.AutoInit()
  })

  return (
    <div className="App">
      <SearchBar />
      <div className="container">
      <AddLogModal />
      <Log/>
      <AddBtn/>
      </div>
    </div>
  );
}

export default App;
