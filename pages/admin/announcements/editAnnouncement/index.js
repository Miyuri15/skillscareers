import HeaderBar from '@/components/admin/HeaderBar'
import SideMenu from '@/components/admin/SideMenu'
import EditAnnouncement from '@/components/AdminAnnouncements/EditAnnouncement'
import React from 'react'

const editAnnouncementPage = () => {
  return (
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <EditAnnouncement/>
        </div>
      </div>
  )
}

export default editAnnouncementPage
