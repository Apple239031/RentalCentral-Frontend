import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from "recharts";

const BarChartPlot = () => {
  const data = [
    {
      Cash: "Inflow",
      Percent: 0.2,
    },
    {
      Cash: "Outflow",
      Percent: 0.9,
    },
    {
      Cash: "Net",
      Percent: 1,
    },
  ];
  return (
    <div>
      <BarChart width={470} height={250} data={data}>
        <XAxis dataKey="Cash" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Percent" fill="#2563eb" />
      </BarChart>
    </div>
  );
};

export default BarChartPlot;
