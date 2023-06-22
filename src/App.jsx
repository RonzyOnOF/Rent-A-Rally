import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

import { RootLayout } from './layout/RootLayout';
import { Home } from './pages/home/Home';

export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}