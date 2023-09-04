import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const LentChartPlot = () => {
  const data = [
    {
      Lent: "Inflow",
      Percent: 0.2,
    },
    {
      Lent: "Outflow",
      Percent: 0.9,
    },
    {
      Lent: "Net",
      Percent: 1,
    },
  ];

  return (
    <>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Lent" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Percent"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </>
  );
};
export default LentChartPlot;
