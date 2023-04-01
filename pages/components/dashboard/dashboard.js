import dynamic from 'next/dynamic';
import React from 'react'
const Dashboard = dynamic(() => import("../../../shared/data/DataDashBoard/dashbord"), {ssr: false,});


const DashboardCom = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

DashboardCom.layout = "Contentlayout"
export default DashboardCom