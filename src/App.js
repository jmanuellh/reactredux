import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="App">
      <p>{count}</p>
    </div>
  );
}

export default App;
