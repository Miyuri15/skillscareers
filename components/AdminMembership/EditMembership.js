import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditMembership({ onClose }) {
    const [isEnableMembership, setIsEnableMembership] = useState(true);
  
  const [formData, setFormData] = useState({
    cardNumber: "12345679873",
    cardHolder:"Jason Alan",
    expDate:"23-10-2026",
    cvc:"231",
    nextBillDate:"08 JAN 2024",
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

  // Mask card number (show only last 4 digits, mask the rest)
  const maskedCardNumber = formData.cardNumber
    ? formData.cardNumber.slice(0, -4).replace(/./g, '*') + formData.cardNumber.slice(-4)
    : "";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">Payment Details</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="border-t-2 border-gray-200 mb-4" />

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={maskedCardNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Card Holder</label>
              <input
                type="text"
                name="name"
                value={formData.cardHolder}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#001571]">EXP Date</label>
              <input
                type="date"
                name="expdate"
                value={formData.expDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">cvc</label>
              <input
                type="password"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#001571]">Next Billing Date</label>
            <input
              name="billingdate"
              value={formData.nextBillDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>


          <div className="border-t-2 border-gray-200 mb-4" />

          <div className="flex justify-between">
                  {/* Toggle Buttons */}
                  <div className="flex space-x-2  bg-gray-200 p-1 rounded-xl w-fit">
                    <button
                      onClick={() => setIsEnableMembership(true)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        isEnableMembership
                          ? "bg-blue-900 text-white"
                          : "bg-gray-100 text-blue-900"
                      }`}
                    >
                      <div className="flex space-x-3">
                        <p>Enable Membership</p>
                        <Image
                          src="/images/whitetick.png"
                          alt="tick"
                          width={20}
                          height={20}
                        />
                      </div>
                    </button>
                    <button
                      onClick={() => setIsEnableMembership(false)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        !isEnableMembership
                          ? "bg-blue-900 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <div className="flex space-x-3">
                        <p>Disable Membership</p>
                        <Image
                          src="/images/graytick.png"
                          alt="tick"
                          width={20}
                          height={20}
                        />
                      </div>
                    </button>
                  </div>
            
            <button
              type="submit"
              className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            >
              <div className="flex items-center space-x-3">
                <p>Save</p>
                <Image src="/images/whitetick.png" alt="tick" width={20} height={10} />
              </div>
            </button>
          </div>
        </form>
      </div>
            {/* Display Components */}
            {/* {isEnableMembership ? <EnableMemberships /> : <RestrictedRecruiters />} */}
      
    </div>
  );
}
