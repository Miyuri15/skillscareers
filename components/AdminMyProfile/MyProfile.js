import Image from "next/image";
import { useState } from "react";
import EditMyProfileForm from "./EditMyProfileForm";

export default function AdminMyProfile() {
    const [showEditMyProfileForm, setShowEditMyProfileForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "info@aerfintechnologies.com",
        lastName:"info@aerfintechnologies.com",
        userName: "info@aerfintechnologies.com",
        phone: "011-2335-876",
        email:"info@aerfintechnologies.com"
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onClose(); // Close the form on submit
      };
    
    
  return (
    <>
      <div className="flex flex-col p-6 bg-white min-h-screen">
        <h2 className="text-[#001571] text-xl font-bold mb-6">My Profile</h2>
<div >
        {/* profile Image */}
        <div className="relative">
          {/* DP Image */}
          <div className="transform  border-4 border-[#001571] bg-white rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-[180px] lg:h-[180px] flex items-center justify-center">
            <Image
              src="/images/dp1.jpeg"
              alt="Profile"
              width={300}
              height={190}
              className="fill"
            />
          </div>

          {/* Edit Icon */}
          <div className="absolute -top-3 left-[120px] transform translate-x-1/2 translate-y-1/2 w-20 h-8 sm:w-10 sm:h-30  rounded-full  items-center justify-center shadow-md">
            <Image
              src="/images/editiconwhite.png"
              alt="Edit Icon"
              width={40}
              height={20}
            />
          </div>
        </div>
        </div>
{/* edit button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowEditMyProfileForm(true)}
                    className=" text-white px-3 py-2 sm:px-4 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/editicon.png"
                        alt="arrow"
                        width={50}
                        height={16}
                      />
                    </div>
                  </button>
                </div>

{/* Form */}
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#001571]">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
          </div>


            <div>
              <label className="block text-sm font-semibold text-[#001571]">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
          </div>
        </form>
        {/* Edit My Profile Form Popup */}
        {showEditMyProfileForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditMyProfileForm onClose={() => setShowEditMyProfileForm(false)} />
            </div>
          </div>
        )}


      </div>
    </>
  );
}
