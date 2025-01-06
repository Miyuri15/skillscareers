import HeaderBar from '@/components/admin/HeaderBar'
import SideMenu from '@/components/admin/SideMenu'
import EditJobPost from '@/components/AdminJobPosts/EditJobPost'
import React from 'react'

const jobPostEdit = () => {
  return (
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <EditJobPost/>
        </div>
      </div>
  )
}

export default jobPostEdit
