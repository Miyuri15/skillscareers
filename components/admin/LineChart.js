import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const lineData = {
    labels: ["Sun 9", "Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15"],
    datasets: [
      {
        label: "Job Posts",
        data: [9, 10, 18, 22, 13, 25, 15],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
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
        position: "top", // Display x-axis at the top
        grid: {
          drawOnChartArea: true, // Draw vertical lines
          drawTicks: false, // Hide tick marks
          lineWidth: 1,
          color: "#E5E7EB", // Light gray for vertical lines
          borderDash: [4, 4], // Dashed lines
          border: false, // Remove top border
        },
        ticks: {
          color: "#6B7280",
          font: { size: 12 },
          callback: function (value, index) {
            // Format labels as "Mon 9", "Tue 10", etc.
            const label = this.getLabelForValue(index);
            return label;
          },
        },
      },
      y: {
        grid: {
          display: false, // No horizontal grid lines
          border: false, // Remove left border
        },
        ticks: {
          display: false, // Remove Y-axis values
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex flex-row justify-between">
        <p className="font-5xl font-semibold text-[#001571] mb-4">Job Posts</p>
        <p className="font-5xl font-semibold text-[#001571] mb-4">This Week</p>
      </div>
      <Line data={lineData} options={lineOptions} />
    </div>
  );
}
