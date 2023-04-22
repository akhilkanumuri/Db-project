import { createBrowserRouter, Outlet, Route, RouterProvider} from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Single from './pages/Single'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './style.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  },
  {
    path: "/post/:id",
    element: <div>
      <NavBar/>
      <Single/>
      <Footer/>
    </div>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/about",
    element: <div>
      <NavBar/>
      <h1>About Us</h1>
      <p>Welcome to our website. We are a team of dedicated professionals committed to providing you with the best real estate experience possible.</p>
      <Footer/>
    </div>
  }
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
