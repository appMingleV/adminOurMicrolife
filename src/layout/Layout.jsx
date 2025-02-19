import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <DashboardLayout>
        <Outlet />
    </DashboardLayout>
  )
}

export default Layout
