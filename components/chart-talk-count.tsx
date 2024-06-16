"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    count: 4000,
  },
  {
    name: "Tue",
    count: 3000,
  },
  {
    name: "Wed",
    count: 2000,
  },
  {
    name: "Thu",
    count: 2780,
  },
  {
    name: "Fri",
    count: 1890,
  },
  {
    name: "Sat",
    count: 2390,
  },
  {
    name: "Sun",
    count: 3490,
  },
];

export default function ChartTalkCount() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        maxBarSize={30}
        barGap={10}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="var(--accent-color)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
