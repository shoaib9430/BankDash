import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jul", uv: 100, amt: 2400 },
  { name: "Aug", uv: 400, amt: 2210 },
  { name: "Sep", uv: 220, amt: 2290 },
  { name: "Oct", uv: 2780, amt: 2000 },
  { name: "Nov", uv: 1890, amt: 2181 },
  { name: "Dec", uv: 2390, amt: 2500 },
  { name: "Jan", uv: 3490, amt: 2100 },
];

export default function Balance() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "1.25rem",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.75rem",
        width:"100%",
        maxWidth: "100%", 
        height: "260px",
        margin:"0 auto"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          syncId="anyId"
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#718EBF" }} />
          <YAxis axisLine={false} tick={{ fill: "#718EBF" }} />
          <Tooltip />
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(45, 96, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(45, 96, 255, 0)" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#1814F3"
            fill="url(#colorBlue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
