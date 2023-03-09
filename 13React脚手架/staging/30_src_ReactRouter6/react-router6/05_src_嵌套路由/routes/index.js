import { Navigate } from "react-router"
import About from "../components/About"
import Home from "../components/Home"
import News from '../components/News'
import Message from '../components/Message'
export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [{
      path: '/home/news',
      element: <News />
    },
    {
      path: '/home/message',
      element: <Message />
    }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/about' />
  }
]