import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from 'App.jsx';
import '/indexx.css ';

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    childeren: [], 
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);