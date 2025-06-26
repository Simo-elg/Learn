import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Quotes from './components/Quotes';

function App() {
  return (
    <BrowserRouter>
    <nav className='flex gap-4 justify-center mt-4'>
      <Link to='/' className='underline'>Acceuil</Link>
      <Link to='/about' className='underline'>A propos</Link>
    </nav>

    <Routes>
      <Route path='/' element= {
        <>
        <Header title='Belles citations' color='#8b5cf6'></Header>
        <Quotes></Quotes>
        </>
      }>
      </Route>

      <Route path='/about' element={
        <>
        <Header title='A propos'></Header>
        <About></About>
        </>
      }>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App
