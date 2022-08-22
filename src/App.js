import logo from './logo.svg';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Excss = styled.button`
  display: inline-flex;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Excss></Excss>
      </header>
    </div>
  );
}

export default App;
