/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Inbox } from './components/Inbox'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Body } from './components/Body'
import { Mail } from './components/Mail'

const AppRouter =  createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element:<Mail/>
      }
    ]
  }
]);

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <RouterProvider router={AppRouter}/>
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar className="w-1/4 border-r" />
        
        {/* Inbox */}
        <Inbox className="flex-1 overflow-y-auto" />
      </div>
    </div>
  );
  
}

export default App
