import Image from "next/image"

export default function Help(){
    const Companies = [
        {
            logo:"/images/codezelalogo.png",
            name:"Codezela Technologies",
            type:"Recruiter",
            date:"09 AUG 2024",
            time:"03:45:25 PM"
        },
        {
            logo:"/images/dp1.jpeg",
            name:"Aln Fernando",
            type:"Candidate",
            date:"09 AUG 2024",
            time:"02:45:25 PM"
        },
        {
            logo:"/images/dp1.jpeg",
            name:"Aln Fernandes",
            type:"Candidate",
            date:"09 AUG 2024",
            time:"02:45:25 PM"
        },

    ]
    return<>
              <div className="bg-white rounded-lg mt-8 px-6 py-3 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#001571]">
                    Help & Contact Inquiries
                  </h3>
    
                  <button className="text-[#001571] text-sm font-semibold">
                    <div className="flex flex-row justify-between space-x-2">
                      <h4>View All</h4>
                      <Image
                        src="/images/arrowrightblue.png"
                        alt="arrow"
                        width={20}
                        height={10}
                      />
                    </div>
                  </button>
                </div>
                <div className="mt-2 flex flex-col items-start ">
                  {/* Company Logo and Name */}
                  {Companies.map((company)=>(
                  <div className="flex flex-row items-center justify-between w-full"
                  key={company.name}
>
                        <div className="flex items-center space-x-3 mt-2">
                    <Image
                      src={company.logo}
                      alt="Company Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">
                       {company.name}
                      </p>
                      </div>
                      </div>
    
                      <div>
                      <p className="text-sm ">{company.type}</p>
                    </div>
    
                  {/* Date */}
                  <p className="">{company.date}</p>
    
                  {/* Time */}
                  <p className="">{company.time}</p>
    
                  {/* View Button */}
                  <button className="flex items-center space-x-2 text-sm bg-[#001571] font-semibold text-white px-4 py-2 rounded">
                    <span>View Now</span>
                    <Image
                      src="/images/arrowrightwhite.png"
                      alt="arrow"
                      width={20}
                      height={10}
                    />
                  </button>
                </div>

                  ))}
                  </div>
    </div>
    
    </>
}