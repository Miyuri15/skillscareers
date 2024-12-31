import HeaderBar from '@/components/admin/HeaderBar'
import SideMenu from '@/components/admin/SideMenu'
import EditProfile from '@/components/AdminRecruiters/EditProfile'
import React from 'react'

const editProfile = () => {
  return (
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <EditProfile/>
        </div>
      </div>
  )
}

export default editProfile
