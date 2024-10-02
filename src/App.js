import './App.css';
import Counter from './Components/AnotherCount';
import Async from './Components/Async';
import Async2 from './Components/Async2';
import CountDom from './Components/Count';
import LoginPage from './Components/LoginPage';
import Demo from './Components/ReducerCounter';



function App() {
  return (
    <div className="App">
      <LoginPage/>
      <Async/>
      <Async2/>
      <CountDom/>
      <Demo/>
      <Counter/>
    </div>
  );
}

export default App;
