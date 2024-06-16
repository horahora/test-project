"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "点赞", value: 500 },
  { name: "评论", value: 300 },
  { name: "分享", value: 200 },
];

export default function ChartShare() {
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
        <Cell fill={"#77b7c9"} />
        <Cell fill={"#eff2fb"} />
      </Pie>
    </PieChart>
  );
}
