import './App.css';
import Docs from './components/Docs';
import {app, database} from './firebaseConfig'

function App() {
  return (
    <div className="App">
      <Docs database ={database}/>
    </div>
  );
}

export default App;
