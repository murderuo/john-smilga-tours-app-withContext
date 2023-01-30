import './App.css';
import { GlobalContextProvider } from './components/context/globalContext';


import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Header  />
        <Main  />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
