import BarChart from "../admin/BarChart";
import Charts from "../admin/JobPostGraph";
import LineChart from "../admin/LineChart";
import HighDemandJobPosts from "./HighDemandPosts";
import TopJobPosts from "./TopJobPosts";

export default function AdminAnalytics(){
    return<>
<div className="bg-white rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="pr-6 md:border-r md:border-gray-300">
    <LineChart />
  </div>
  <div className="pl-6">
    <BarChart />
  </div>
</div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighDemandJobPosts/>
        <TopJobPosts/>
     </div>
    </>
}