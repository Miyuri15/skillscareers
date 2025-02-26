import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const barData = {
    // Updated labels to include day and date
    labels: ["Sun 9", "Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15"],
    datasets: [
      {
        label: "Active Users",
        data: [123, 521, 302, 459, 252, 289, 112],
        backgroundColor: "rgba(79, 70, 229, 0.6)",
        borderRadius: 10, // Add rounded edges
        barPercentage: 0.6, // Adjust bar width
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => ` ${tooltipItem.raw}`,
        },
        backgroundColor: "#4F46E5",
        titleFont: { size: 14 },
        bodyFont: { size: 14 },
        padding: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: true, // Draw grid lines only on the chart area
          drawTicks: false, // Hide tick marks
          lineWidth: 1,
          color: "#E5E7EB", // Light gray for vertical lines
          borderDash: [4, 4], // Dashed lines
        },
        ticks: {
          color: "#6B7280",
          font: { size: 12 },
        },
      },
      y: {
        grid: {
          display: false, // Disable horizontal grid lines
        },
        ticks: {
          display: false, // Remove Y-axis values
        },
      },
    },
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl">
      <div className='flex flex-row justify-between'>
        <p className="font-5xl font-semibold text-[#001571] mb-4">Job Posts</p>
        <div className='flex flex-row space-x-4 items-center '>
        <p className="font-5xl font-semibold text-[#001571] mb-4">This Week</p>
        <Image src="/images/arrowupp.png" alt='arrow' width={20} height={10} className="mb-4"/>
        </div>

       </div>
        <Bar data={barData} options={barOptions} />
      </div>
    </>
  );
}
