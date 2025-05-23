import React from 'react'
import DashboardWrapper from '../components/DashboardWrapper'
import TopBar from '../components/TopBar'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import RightBar from '../components/RightBar'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <TopBar />
      <div className='flex flex-wrap md:flex-nowrap pt-4 gap-4 mb-5'>
        <div className='w-full md:w-[calc(100%-210px)] lg:w-[calc(100%-230px)]'>
          <Card1 />
          <Card2 />
        </div>
        <div className='w-full md:w-[210px] lg:w-[230px] rounded-2xl dashboard-card-shadow bg-white p-4'>
           <RightBar />
        </div>
      </div>
    </DashboardWrapper>
  )
}

export default Dashboard