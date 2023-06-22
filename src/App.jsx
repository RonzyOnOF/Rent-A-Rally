import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

import { RootLayout } from './layout/RootLayout';

//pages
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { CarPage } from './pages/cars/CarPage';
import { Contact } from './pages/contact/Contact';
import { Team } from './pages/team/Team';

export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='cars' element={ <CarPage /> } />
      <Route path='contact' element={ <Contact /> } />
      <Route path='team' element={ <Team /> } />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}