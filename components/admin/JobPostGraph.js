import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Charts = () => {
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
    <LineChart/>
    <BarChart/>
    </div>
  );
};

export default Charts;
