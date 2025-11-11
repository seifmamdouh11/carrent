import {useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from '../components/Home/Home'
import Search from '../components/Search/Search'
import SearchCars from '../components/SearchCars/SearchCars'
import Cars from '../components/Cars/Cars'
import MasterLayout from '../components/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true })
}, [])
  let routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
        path: 'cars', element: <Cars />
      }]
    }
  ])
  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
