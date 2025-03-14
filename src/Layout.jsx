
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import SidebarProvider from './contexts/SidebarContext'
import Footer from './components/Footer'

const Layout = () => {


  return (
    <SidebarProvider>
      <div >  
          <Navbar />
          <main>
              <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
      </div>
    </SidebarProvider>
  )
}

export default Layout