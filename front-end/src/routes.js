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
import CreateDoctor from './pages/Doctors/create'
import CreateAppointment from './pages/Appointments/create'
import * as api from './services/api'

const logout = async () => {
  const response = await api.post('/invalidToken')
  if (response.ok) {
    return true
  } else {
    return false
  }
}

const Private = ({ Component }) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  return isAuthenticated ? <Component /> : <Home />
}

const Logout = ({ Component }) => {
  logout()
  const isAuthenticated = localStorage.getItem('token') !== null
  if (isAuthenticated) localStorage.removeItem('token')
  return <Component />
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/exit" element={<Logout Component={Home} />}></Route>
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
        path="/doctors/create"
        element={<Private Component={CreateDoctor} />}
      ></Route>
      <Route
        path="/appointments/create"
        element={<Private Component={CreateAppointment} />}
      ></Route>
      <Route
        path="/patients/update/:id"
        element={<Private Component={Create} />}
      ></Route>
      <Route
        path="/doctors/update/:id"
        element={<Private Component={CreateDoctor} />}
      ></Route>
      <Route
        path="/appointments/update/:id"
        element={<Private Component={CreateAppointment} />}
      ></Route>
    </Route>,
  ),
)

export default function Router() {
  return <RouterProvider router={router} />
}
