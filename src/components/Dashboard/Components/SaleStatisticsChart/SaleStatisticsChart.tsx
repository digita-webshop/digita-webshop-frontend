import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DashTitle } from "../../styles";
import { CardWrapper } from "@/styles/panel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Sales",
      data: [33, 23, 55, 41, 44, 65, 70, 50, 35, 20, 40],
      borderColor: "#f03637",
      backgroundColor: "#ff7d7e",
    },
    {
      fill: true,
      label: "Visitors",
      data: [50, 33, 65, 60, 54, 75, 80, 65, 40, 35, 50],
      borderColor: "#f4a2a2",
      backgroundColor: "#ffd4d4",
    },
  ],
};

function SaleStatisticsChart() {
  return (
    <CardWrapper>
      <DashTitle>sale statistics</DashTitle>
      <Line options={options} data={data} />
    </CardWrapper>
  );
}

export default SaleStatisticsChart;
