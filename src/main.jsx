import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import About from './pages/About.jsx';
import Terms from './pages/Terms.jsx';
import Contact from './pages/Contact.jsx';
import Tutorial from './pages/Tutorial.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path='about' element={<About />} />
      <Route path='terms' element={<Terms />} />
      <Route path='contact' element={<Contact />} />
      <Route path='tutorial' element={<Tutorial />} />

    </Route>

  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
