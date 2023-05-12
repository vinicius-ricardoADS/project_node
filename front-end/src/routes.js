import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';


const router = createBrowserRouter (
    createRoutesFromElements (
        <Route>
            <Route path='/' element={<Home />}></Route>
        </Route>
    )
);

export default function Router () {
    return <RouterProvider router={router}/>
}