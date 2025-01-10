import BarChart from "../admin/BarChart";
import Charts from "../admin/JobPostGraph";
import LineChart from "../admin/LineChart";
import HighDemandJobPosts from "./HighDemandPosts";
import TopJobPosts from "./TopJobPosts";

export default function AdminAnalytics(){
    return<>
    <div className="bg-white rounded-xl p-2">
      <p className="p-4 text-xl font-bold text-[#001571]">Analytics</p>
<div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="pr-6 md:border-r md:border-gray-300">
    <LineChart />
  </div>
  <div className="pl-6">
    <BarChart />
  </div>
</div>
</div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighDemandJobPosts/>
        <TopJobPosts/>
     </div>
    </>
}