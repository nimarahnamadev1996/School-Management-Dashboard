import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
   <div className='p-4 flex flex-col gap-4 md:flex-row'>

     {/* LEFT */}

     <div className='w-full lg:w-2/3'>

       {/* USER CARDS */}

       <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard  type="student"/>
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />
       </div>


         {/* MIDDLE CHARTS */}

         <div className="flex gap-4 flex-col lg:flex-row">
           <div className="w-full lg:w-1/3 h-[450px]">
             <CountChart/>
           </div>
         </div>
     
     </div>


      {/* Right */}

      <div className='w-full lg:w-1/3'>
       Right
      </div>
   </div>
  )
}

export default AdminPage