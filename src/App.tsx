import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Quotes from './components/Quotes';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/Login';
import Team from './components/Team';
import { useState } from 'react';
import Protected from './components/Protected';
import Contact from './components/Contact';

function App() {

  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <BrowserRouter>
    <nav className='sticky top-0 bg-white shadow-md z-10 flex gap-4 justify-center mt-4'>
      <Link to='/' className='underline'>Acceuil</Link>
      <Link to='/about' className='underline'>A propos</Link>
      <Link to='*' className='underline'>Page Not Done</Link>
      <Link to="/team"  className="underline">Team</Link>
      <Link to="/login" className="underline">Login</Link>
      <Link to="/contact" className="underline">Contact</Link>
    </nav>

    <ScrollToTop></ScrollToTop>

    <Routes>
      <Route path='/' element= {
        <>
        <Header title='Belles citations' color='#8b5cf6'></Header>
        <Quotes></Quotes>
        <div className='h-[200vh] bg-gradient-to-b from transparent to-gray-100'>

        </div>
        </>
      }>
      </Route>

      <Route path='/about' element={
        <>
        <Header title='A propos'></Header>
        <About></About>
         <div className='h-[200vh] bg-gradient-to-b from transparent to-gray-100'>

        </div>
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

      {/* Login */}
        <Route
          path="/login"
          element={
            <>
              <Header title="Connexion" />
              {/* on passe setIsLogged au composant Login */}
              <Login setIsLogged={setIsLogged} />
            </>
          }
        />

        {/* Team (protégée) */}
        <Route
          path="/team"
          element={
            <Protected isLogged={isLogged}>
              <Header title="Membres de la Team" />
              <Team />
            </Protected>
          }
        />

        <Route path='/contact' element={
          <>
          <Contact></Contact>
          </>
        }>

        </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App
