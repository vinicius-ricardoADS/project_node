import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import Patient from './pages/Patients'
import Doctor from './pages/Doctors'
import Appoitments from './pages/Appointments'
import Admin from './pages/Admins'
import Create from './pages/Patients/create'

const Private = ({ Component }) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  return isAuthenticated ? <Component /> : <Home />
}

const Deslogar = ({ Component }) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  if (!isAuthenticated) localStorage.removeItem('token')
  return <Component />
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/exit" element={<Deslogar Component={Home} />}></Route>
      <Route path="/patients" element={<Private Component={Patient} />}></Route>
      <Route path="/doctors" element={<Private Component={Doctor} />}></Route>
      <Route
        path="/appointments"
        element={<Private Component={Appoitments} />}
      ></Route>
      <Route path="/admins" element={<Private Component={Admin} />}></Route>
      <Route
        path="/patients/create"
        element={<Private Component={Create} />}
      ></Route>
      <Route
        path="/patients/update/:id"
        element={<Private Component={Create} />}
      ></Route>
    </Route>,
  ),
)

export default function Router() {
  return <RouterProvider router={router} />
}
