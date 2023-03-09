import { Navigate } from "react-router"
import About from "../components/About"
import Home from "../components/Home"
export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <Navigate to='/about' />
  }
]