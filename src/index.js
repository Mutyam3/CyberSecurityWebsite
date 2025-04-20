import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './features/Body/Home';
import OurWork from './features/Body/OurWork/OurWork';
import Services from './features/Body/Services/Services';
import AboutUs from './features/Body/About/AboutUs';
import Products from './features/Body/Products/Products';
import ContactUs from './features/Body/ContactUs/ContactUs';



const myRouter = createBrowserRouter([
   {
     path : '/',
     element : <App/>,
     children : [
      {
         path : '/',
         element : <Home/>
      },
      {
        path : '/home',
        element : <Home/>
      },
      {
        path : '/our-work',
        element: <OurWork/>
      },
      {
        path : '/services/:id',
        element : <Services/>
      },
      {
        path : '/aboutus/:id',
        element : <AboutUs/>
      }, 
      {
        path : '/products',
        element : <Products/>
      },
      {
        path:'/contactus',
        element : <ContactUs/>
      }

     ]
   }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store = {store}>
         <RouterProvider router={myRouter}>

         </RouterProvider>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
