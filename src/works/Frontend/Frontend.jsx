import { Outlet } from 'react-router'


const Frontend = () => {

  return (  
      <div className="p-2">
        <Outlet />
      </div>
  )
}

export default Frontend