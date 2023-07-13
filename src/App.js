import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
<BrowserRouter>
  <Routes>
  <Route path="/" element={<About/>} />


  </Routes>
</BrowserRouter>
  );
}

export default App;
