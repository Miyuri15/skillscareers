import HeaderBar from '@/components/recruiter/HeaderBar'
import SideMenu from '@/components/recruiter/SideMenu'
import EditJobPost from '@/components/RecruiterJobPosts/EditJobPost'
import React from 'react'

const editJobPost = () => {
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

export default editJobPost
