
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Works from './works/Works.jsx';
import Frontend from "./works/Frontend/Frontend.jsx"
import Backend from "./works/Backend/Backend.jsx"
import Database from "./works/Database/Database.jsx"
import Layout from "./Layout.jsx"
import FrontIntro from './works/Frontend/FrontIntro.jsx';
import WorksNavbar from './components/Navbar/WorksNavbar.jsx';
import FrontPortfolio from './works/Frontend/FrontPortfolio.jsx';
import ShoppingCart from './works/Frontend/ShoppingCart.jsx';
import MultistepForm from './works/Frontend/MultistepForm.jsx';
import BackendInto from './works/Backend/BackendInto.jsx';
import Authentication from './works/Backend/Authentication.jsx';
import EcommerceExpress from './works/Backend/EcommerceExpress.jsx';
import EcommerceDjango from './works/Backend/EcommerceDjango.jsx';
import EmailServer from './works/Backend/EmailServer.jsx';
import Chatapp from './works/Backend/Chatapp.jsx';
import BlogWP from './works/Backend/BlogWP.jsx';


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      {/* Layout should be wrapping all routes */}
      <Route path="/" element={<Layout />} >
        <Route index element={<App />} />
        
        {/* Nested route for works */}
        <Route path="works" element={<WorksNavbar />}>
          <Route index element={<Works />} />
          <Route path="frontend" element={<Frontend />}>
            <Route index element={<FrontIntro />} />
            <Route path='portfolio' element={<FrontPortfolio />} />
            <Route path='shopping_cart' element={<ShoppingCart/>}/>
            <Route path='form' element={<MultistepForm/>}/>
          </Route>
          <Route path="backend" element={<Backend />}>
            <Route index element={<BackendInto />}/>
            <Route path="authentication" element={<Authentication />} />
            <Route path="ecommerce_express" element={<EcommerceExpress />} />
            <Route path="ecommerce_django" element={<EcommerceDjango />} />
            <Route path="email_server" element={<EmailServer />} />
            <Route path="chatapp" element={<Chatapp />} />
            <Route path="blog-wp" element={<BlogWP />} />
          </Route>
          <Route path="database" element={<Database />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  
)
