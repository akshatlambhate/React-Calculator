import logo from './logo.svg';
import './App.css';
import './components/main.css';

import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
        <div className='text'> <p>Use my Calculator </p></div>
      <Calculator />
    </div>
  );
}

export default App;
