import Link from 'next/link';
import { FaLaptopCode, FaTruck, FaMoneyCheckAlt, FaChalkboardTeacher, FaUsers, FaChartLine, FaHeartbeat } from 'react-icons/fa';

export default function Category() {
  const categories = [
    { name: 'Technology & Development', icon: <FaLaptopCode /> },
    { name: 'Operations & Logistics', icon: <FaTruck /> },
    { name: 'Finance & Accounting', icon: <FaMoneyCheckAlt /> },
    { name: 'Education & Training', icon: <FaChalkboardTeacher /> },
    { name: 'Human Resources', icon: <FaUsers /> },
    { name: 'Marketing & Sales', icon: <FaChartLine /> },
    { name: 'Health & Wellness', icon: <FaHeartbeat /> },
    { name: 'Human Resources', icon: <FaUsers /> },
    { name: 'Human Resources', icon: <FaUsers /> },
  ];

  return (
    <div className="p-20 mt-6 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900 pb-20">Categories</h2>
        <Link href="#" className="text-blue-600 flex items-center space-x-1 font-medium">
          
            <span>View All</span>
            <span>→</span>
        
        </Link>
      </div>

      {/* Grid with Dividers */}
      <div className="space-y-10">
        {[0, 3, 6].map((rowIndex) => (
          <div key={rowIndex}>
            <div className="grid grid-cols-3 gap-x-8">
              {categories.slice(rowIndex, rowIndex + 3).map((category, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-3xl text-blue-900">{category.icon}</div>
                  <span className="text-lg text-blue-900 font-medium">{category.name}</span>
                </div>
              ))}
            </div>
            {/* Divider */}
            {rowIndex < 6 && <div className="border-t border-gray-300 mt-6"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
