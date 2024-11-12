import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecruiterListPage from "@/components/RecruiterList";


export default function RecruiterSearchPage() {
  return (
    <>
      <Header />
      <div className="p-10">
      <div className="mt-20 mb-12">
            <h2 className="text-4xl text-gray-400 font-bold">Find Your<span className="text-blue-900"> Perfect</span> Job.</h2>
        </div>

      <div className="bg-[#e6e8f1] h-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 w-auto rounded-md">
          <input
            type="text"
            placeholder="Easily find the recruiter you're looking for..."
            className="bg-gray-200 flex-grow px-4 py-6 focus:outline-none w-full rounded-md sm:w-auto font-semibold placeholder-[#5462A0]"
          />
          <button className="bg-[#001571] text-white px-14 py-5 mr-2 rounded-md font-semibold w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 flex flex-wrap justify-center gap-4 mb-8">
        <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg">
          <option>Industry Specialization</option>
        </select>
        <select className="bg-[#001571] w-full text-white px-4 py-2 rounded-lg">
          <option>Employee Range</option>
        </select>
        <select className="bg-[#001571] w-full text-white px-4 py-2 rounded-lg">
          <option>Job Types</option>
        </select>
      </div>{" "}
      {/* content */}
      <RecruiterListPage/>
      </div>
      <Footer />
    </>
  ); 
}
