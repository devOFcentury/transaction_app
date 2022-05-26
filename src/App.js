import {Routes, Route  } from 'react-router-dom'
import './App.css';
import State from './context/State';
import Home from './component/Home';
import AddTransactions from './component/AddTransactions';
import Information from './component/information';


function App() {

  return (
    <div className="container">

      <State>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Choisissez un élément pour plus d'infos</p>
                </main>
              }
            />
            <Route path='/:type/:index:' element={<Information/>} />
            <Route path='/:type/:index' element={<Information/>} />
          </Route>
          <Route path='/addTransactions' element={<AddTransactions/>} />
        </Routes>
      </State>
    </div>
  );
}

export default App;
