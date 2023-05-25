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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/patients" element={<Patient />}></Route>
      <Route path="/doctors" element={<Doctor />}></Route>
      <Route path="/appointments" element={<Appoitments />}></Route>
      <Route path="/admins" element={<Admin />}></Route>
      <Route path="/patients/create" element={<Create />}></Route>
      <Route path="/patients/update/:id" element={<Create />}></Route>
    </Route>,
  ),
)

export default function Router() {
  return <RouterProvider router={router} />
}
