"use client";

import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
  name: `${i}`,
  count: Math.floor(Math.random() * 100) + 10,
}));

export default function ChartTalkFrequency() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--accent-color)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--accent-color)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stroke="var(--accent-color)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
