"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "纯文本", value: 400 },
  { name: "图文类", value: 300 },
];

export default function ChartInteraction() {
  return (
    <PieChart width={90} height={90}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={30}
        outerRadius={42}
        paddingAngle={5}
        dataKey="value"
      >
        <Cell fill={"#007991"} />
        <Cell fill={"#eff2fb"} />
      </Pie>
    </PieChart>
  );
}
