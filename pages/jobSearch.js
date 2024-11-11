import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const countries = [
  { value: "", label: "Select the Country", code: "" },
  { value: "US", label: "United States", code: "us" },
  { value: "CA", label: "Canada", code: "ca" },
  { value: "GB", label: "United Kingdom", code: "gb" },
  { value: "FR", label: "France", code: "fr" },
  { value: "DE", label: "Germany", code: "de" },
  { value: "IN", label: "India", code: "in" },
  { value: "AU", label: "Australia", code: "au" },
  { value: "JP", label: "Japan", code: "jp" },
  { value: "CN", label: "China", code: "cn" },
  { value: "BR", label: "Brazil", code: "br" },
  { value: "ZA", label: "South Africa", code: "za" },
  { value: "RU", label: "Russia", code: "ru" },
  { value: "IT", label: "Italy", code: "it" },
  { value: "ES", label: "Spain", code: "es" },
  { value: "MX", label: "Mexico", code: "mx" },
  { value: "NG", label: "Nigeria", code: "ng" },
  { value: "KR", label: "South Korea", code: "kr" },
  { value: "AR", label: "Argentina", code: "ar" },
  { value: "NL", label: "Netherlands", code: "nl" },
  { value: "SE", label: "Sweden", code: "se" },
];

export default function jobSearchPage() {
  return (
    <>
      <Header />
      <div className="p-10">
      <div className="bg-[#e6e8f1] h-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 w-auto rounded-md">
          <input
            type="text"
            placeholder="Search by job title, keywords, or company."
            className="bg-gray-200 flex-grow px-4 py-6 focus:outline-none w-full rounded-md sm:w-auto font-semibold placeholder-[#5462A0]"
          />
          <select className="bg-[#e6e8f1] border border-2 border-[#B0B6D3]  text-[#5462A0] px-20 py-5 font-semibold rounded-md w-full sm:w-auto">
            {countries.map((country) => (
              <option key={country.code}>{country.label}</option>
            ))}
          </select>
          <button className="bg-[#001571] text-white px-14 py-5 mr-2 rounded-md font-semibold w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 flex flex-wrap justify-center gap-4 mb-8">
        <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg">
          <option>Industry</option>
        </select>
        <select className="bg-[#001571] w-full text-white px-4 py-2 rounded-lg">
          <option>Experience Level</option>
        </select>
        <select className="bg-[#001571] w-full text-white px-4 py-2 rounded-lg">
          <option>Salary Range</option>
        </select>
        <select className="bg-[#001571] w-full text-white px-4 py-2 rounded-lg">
          <option>Job Type</option>
        </select>
      </div>{" "}
      </div>
      <Footer />
    </>
  ); 
}
