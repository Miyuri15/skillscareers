export default function Graph() {
  const posts = [
    { day: "Sun", count: 9 },
    { day: "Mon", count: 10 },
    { day: "Tue", count: 11 },
    { day: "Wed", count: 12 },
    { day: "Thu", count: 13 },
    { day: "Fri", count: 14 },
    { day: "Sat", count: 15 },
  ];

  return (
    <>
{/* Job Posts and Active Users Graphs */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Job Posts Graph */}
  <div className="bg-white rounded-lg p-6 shadow-sm relative">
    <div className="flex flex-row items-center justify-between mb-8">
      <h3 className="text-lg font-semibold text-[#001571]">Job Posts</h3>
      <h3 className="text-lg font-semibold text-[#001571]">This Week</h3>
    </div>
    {/* Parent Container for Graph */}
    <div className="relative">
      {/* Line Graph Image */}
      <img
        src="/images/lineGraph.png"
        alt="Line Graph Background"
        className="absolute w-4/5 h-auto top-24 left-0 z-10 pointer-events-none"
      />
      {/* Line Graph Overlay */}
      <img
        src="/images/lineGraphLine.png"
        alt="Line Graph Line"
        className="absolute w-4/5 h-auto top-24 left-0 z-10 pointer-events-none"
      />
      {/* Vertical Line Beside the Graphs */}
      <div
        className="absolute top-24 right-[100px] w-[2px] bg-[#001571]"
        style={{
          height: "200px", // Adjust the height of the vertical line
        }}
      ></div>
      {/* Days and Vertical Dashed Lines */}
      <div className="flex justify-between relative z-40">
        {posts.map((post) => (
          <div key={post.day} className="flex flex-col items-center">
            {/* Day */}
            <h4 className="text-[#001571] font-medium">{post.day}</h4>
            {/* Count */}
            <h5 className="text-[#001571] text-md">{post.count}</h5>
            {/* Vertical Dashed Line */}
            <div
              className="w-px border-dashed border-2 border-[#B0B6D3] opacity-30"
              style={{
                height: "240px", // Set the height of the dashed line
                marginTop: "10px", // Space between count and the start of the dashed line
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  </div>


        {/* Active Users Graph */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold text-[#001571]">
              Active Users
            </h3>
            <h3 className="text-lg font-semibold text-[#001571]">This Week</h3>
          </div>
          <div className="h-40 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}
