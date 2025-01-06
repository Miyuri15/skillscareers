import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EditMembership from "./EditMembership";

export default function MembershipPlans() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const [selectedRows, setSelectedRows] = useState(
    Array.from({ length: 15 }, () => "Basic Recruiter") // Default selection for all rows (15 rows in total)
  );

  const plans = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "Codezela Technologies",
    period: "25 AUG 2024 - 25 AUG 2024",
    logo: "/images/codezelalogo.png",
  }));

  const packages = [
    { package: "Basic Recruiter" },
    { package: "Professional Recruiter" },
    { package: "Enterprise Recruiter" },
  ];

  const handleChange = (index, value) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = value;
    setSelectedRows(updatedSelectedRows);
  };

  return (
    <div className="p-4 mt-6">
      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead className="text-md text-[#8A93BE]">
            <tr>
              <th className="px-4 py-2"> Recruiter Name</th>
              <th className="px-4 py-2">Membership Plan</th>
              <th className="px-4 py-2">Membership Period</th>
              <th className="px-4 py-2 text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, rowIndex) => (
              <tr
                key={plan.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <div className="flex">
                    <Image
                      src={plan.logo}
                      alt="logo"
                      width={40}
                      height={20}
                      className="pr-2"
                    />
                    {plan.name}
                  </div>
                </td>

                <td className="px-4 py-2 ">
                  <select
                    value={selectedRows[rowIndex]}
                    onChange={(e) => handleChange(rowIndex, e.target.value)}
                    className="px-4 py-2 border rounded bg-[#E6E8F1]"
                  >
                    {packages.map((pckg) => (
                      <option key={pckg.package} value={pckg.package}>
                        {pckg.package}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">{plan.period}</td>
                <td className="px-1 py-2 flex space-x-2 justify-end">
                  <Link href="#">
                    <button
                      className="bg-[#001571] text-white px-5 py-2 rounded-lg text-sm"
                      onClick={() => setShowApplicationForm(true)}
                    >
                      <div className="flex space-x-2">
                        <Image
                          src="/images/edit.png"
                          alt="edit"
                          width={20}
                          height={20}
                        />
                        <p>Edit </p>
                      </div>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit Profile Form Popup */}
      {showApplicationForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
            <EditMembership onClose={() => setShowApplicationForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
