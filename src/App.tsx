import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Quotes from './components/Quotes';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <nav className='flex gap-4 justify-center mt-4'>
      <Link to='/' className='underline'>Acceuil</Link>
      <Link to='/about' className='underline'>A propos</Link>
      <Link to='*'>Page Not Done</Link>
      <Link to="/non-existe" className="underline">Page&nbsp;Not&nbsp;Done</Link>
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

      <Route path='*' element={
        <>
        <NotFound message='The page you are looking for does not exist. Please check the URL or return to the home page.'>
        </NotFound>
        <Link to='/'>Back to main page</Link>
        </>
      }>
      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App
