import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditBioDataForm({ onClose }) {
  const [formData, setFormData] = useState({
    birthday: "20 AUG 2024",
    nationality: "Sri Lankan",
    religion: "Christianity",
    address: "Mawathagama, Kurunegala",
    maritalstatus: "Unmarried",
    languages: "Sinhala, English",
    ethnicity: "South Asian",
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">
            Edit Bio Details
          </h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="border-t-2 border-gray-200 mb-4" />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Birth Day
            </label>
            <input
              type="text"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Nationality
            </label>
            <input
              type="text"
              name="Nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>

            <div>
              <label className="block text-sm font-semibold text-[#001571]">
                Religion
              </label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>

          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Marital Status
            </label>
            <select
                  name="maritalstatus"
                  value={formData.maritalstatus}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
                >
                  <option value="Married  ">
                    Married  
                  </option>
                  <option value="Unmarried  ">
                    Unmarried  
                  </option>
                </select>
          </div>

          <div>
              <label className="block text-sm font-semibold text-[#001571]">
                Languages
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>

            <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Ethnicity
            </label>
            <select
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
                >
                  <option value="Married  ">
                    South Asian  
                  </option>
                  <option value="Unmarried  ">
                    Europian  
                  </option>
                </select>
          </div>


          <div className="border-t-2 border-gray-200 mb-4" />


          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            >
              <div className="flex items-center space-x-3">
                <p>Save</p>
                <Image
                  src="/images/whitetick.png"
                  alt="tick"
                  width={20}
                  height={10}
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
