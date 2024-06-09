import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndivApplicationForm from './pages/individual-form/IndividualApplication';
import ResultForm from './pages/result/ResultForm';
import ResultDisplay from './pages/result/ResultDisplay';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (<>
     <div className="App"><Routes>
       <Route path="/resultDisplay" element={<ResultDisplay />} />
       <Route path="/resultForm" element={<ResultForm />} />
       <Route path="/indivApplicationForm" element={<IndivApplicationForm />} />
     </Routes></div>

  </>);
}

export default App;
