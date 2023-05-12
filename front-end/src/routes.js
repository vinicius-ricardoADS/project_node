import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Patient from './pages/Patients';


const router = createBrowserRouter (
    createRoutesFromElements (
        <Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/patients' element={<Patient />}></Route>
        </Route>
    )
);

export default function Router () {
    return <RouterProvider router={router}/>
}