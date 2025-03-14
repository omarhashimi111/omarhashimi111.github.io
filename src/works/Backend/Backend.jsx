import React from 'react'
import { Outlet } from 'react-router'


const Backend = () => {
  return (
    <div className="p-2">
      <Outlet />
    </div>
  )
}

export default Backend